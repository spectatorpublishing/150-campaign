import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import logo1 from '../assets/logo-imgs/logo_1.png';
import logo2 from '../assets/logo-imgs/logo_2.png';
import logo3 from '../assets/logo-imgs/logo_3.png';
import logo4 from '../assets/logo-imgs/logo_4.png';
import logo5 from '../assets/logo-imgs/logo_5.png';
import logo6 from '../assets/logo-imgs/logo_6.png';
import logo7 from '../assets/logo-imgs/logo_7.png';
import logo8 from '../assets/logo-imgs/logo_8.png';

const LOGOS = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

// How the torn scraps travel on the way into LOGOS[k] (index 0 is the fade-in).
const TRANSITION_STYLES = [null, 'burst', 'wind', 'drop', 'burst', 'wind', 'drop', 'finale'];
const INTRO_MS = 900;
const TRANSITION_MS = 1600;
const FINALE_MS = 2300;
const HOLD_MS = 900;
const MAX_DELAY = 0.35;

// Resting logos are drawn as light ink on the dark hero; mid-flight the scraps
// fade into the original scan so they look like torn pieces of newsprint.
const INK_RGB = [245, 241, 232];
const INK_ALPHA = 0.92;
const PAPER_ALPHA = 0.95;
const INK_DARK = 60;
const INK_LIGHT = 150;

// The slot holds the logo's place in the hero layout; the canvas overhangs it
// so scraps have room to fly (the hero clips anything past its edges).
const Slot = styled.div`
  position: relative;
  width: min(88vw, 900px, 120vh);
  aspect-ratio: 1710 / 300;
  margin-top: 5vh;
`;

const Canvas = styled.canvas`
  position: absolute;
  top: -150%;
  bottom: -150%;
  left: -20%;
  right: -20%;
  width: 140%;
  height: 400%;
  z-index: -1;
  pointer-events: none;
`;

const clamp01 = t => (t < 0 ? 0 : t > 1 ? 1 : t);
const easeOut = t => 1 - Math.pow(1 - t, 3);
const rand = (min, max) => min + Math.random() * (max - min);

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const loadImage = src =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });

// Renders a scan into the logo box twice: as-is (the "paper" side of a scrap)
// and as light ink on transparent, with the grey paper keyed out.
const buildTextures = (img, box, dpr) => {
  const w = Math.ceil(box.width * dpr);
  const h = Math.ceil(box.height * dpr);
  const paper = document.createElement('canvas');
  paper.width = w;
  paper.height = h;
  const pg = paper.getContext('2d');
  const scale = Math.min(w / img.width, h / img.height);
  const dw = img.width * scale;
  const dh = img.height * scale;
  pg.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);

  const ink = document.createElement('canvas');
  ink.width = w;
  ink.height = h;
  const ig = ink.getContext('2d');
  const pixels = pg.getImageData(0, 0, w, h);
  const d = pixels.data;
  for (let i = 0; i < d.length; i += 4) {
    const lum = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
    const a = clamp01((INK_LIGHT - lum) / (INK_LIGHT - INK_DARK)) * (d[i + 3] / 255);
    d[i] = INK_RGB[0];
    d[i + 1] = INK_RGB[1];
    d[i + 2] = INK_RGB[2];
    d[i + 3] = a * 255;
  }
  ig.putImageData(pixels, 0, 0);
  return { paper, ink };
};

// Cuts the logo box into a jittered grid of scraps with ragged, torn edges.
// Neighbouring scraps share their edges so they fit back together.
const buildPieces = (box, cols, rows) => {
  const cw = box.width / cols;
  const ch = box.height / rows;
  const V = [];
  for (let r = 0; r <= rows; r++) {
    const row = [];
    for (let c = 0; c <= cols; c++) {
      const interiorX = c > 0 && c < cols;
      const interiorY = r > 0 && r < rows;
      row.push([
        box.x + c * cw + (interiorX ? rand(-0.3, 0.3) * cw : 0),
        box.y + r * ch + (interiorY ? rand(-0.3, 0.3) * ch : 0),
      ]);
    }
    V.push(row);
  }

  const tear = (a, b) => {
    const pts = [];
    const segs = 7;
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const nx = -(b[1] - a[1]) / len;
    const ny = (b[0] - a[0]) / len;
    for (let s = 1; s < segs; s++) {
      const t = s / segs;
      const amp = rand(-1, 1) * len * 0.07;
      pts.push([a[0] + (b[0] - a[0]) * t + nx * amp, a[1] + (b[1] - a[1]) * t + ny * amp]);
    }
    return pts;
  };

  const hEdges = V.map((row, r) => row.slice(0, cols).map((v, c) => tear(v, V[r][c + 1])));
  const vEdges = V.slice(0, rows).map((row, r) => row.map((v, c) => tear(v, V[r + 1][c])));

  const pieces = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const outline = [
        V[r][c],
        ...hEdges[r][c],
        V[r][c + 1],
        ...vEdges[r][c + 1],
        V[r + 1][c + 1],
        ...[...hEdges[r + 1][c]].reverse(),
        V[r + 1][c],
        ...[...vEdges[r][c]].reverse(),
      ];
      const path = new Path2D();
      outline.forEach(([x, y], i) => (i ? path.lineTo(x, y) : path.moveTo(x, y)));
      path.closePath();
      const corners = [V[r][c], V[r][c + 1], V[r + 1][c], V[r + 1][c + 1]];
      pieces.push({
        path,
        cx: corners.reduce((s, p) => s + p[0], 0) / 4,
        cy: corners.reduce((s, p) => s + p[1], 0) / 4,
      });
    }
  }
  return pieces;
};

// Per-scrap flight plan for one transition: stagger, how far it flies out and
// back, how much it spins, and how many half-flips it does (always odd, so it
// lands showing the next logo).
const planFlight = (style, pieces, box) => {
  const mx = box.x + box.width / 2;
  const my = box.y + box.height / 2;
  return pieces.map(p => {
    const across = (p.cx - box.x) / box.width;
    if (style === 'wind') {
      return {
        delay: across * MAX_DELAY,
        dx: rand(0.12, 0.4) * box.width,
        dy: -rand(0.2, 1.3) * box.height,
        rot: rand(0.5, 1.6),
        flips: 1,
        sway: 0,
      };
    }
    if (style === 'drop') {
      return {
        delay: rand(0, MAX_DELAY),
        dx: rand(-0.4, 0.4) * box.height,
        dy: rand(0.9, 1.9) * box.height,
        rot: rand(-1.2, 1.2),
        flips: 1,
        sway: rand(0.15, 0.35) * box.height,
      };
    }
    const finale = style === 'finale';
    const ax = p.cx - mx;
    const ay = (p.cy - my) * 4;
    const len = Math.hypot(ax, ay) || 1;
    const dist = rand(0.15, 0.35) * box.width * (finale ? 1.6 : 1);
    return {
      delay: finale ? rand(0, 0.15) : (len / (box.width / 2)) * MAX_DELAY * 0.8,
      dx: (ax / len) * dist,
      dy: (ay / len) * dist * 0.6 + rand(-0.3, 0.3) * box.height,
      rot: rand(-1, 1) * (finale ? 3 : 1.5),
      flips: finale ? 3 : 1,
      sway: 0,
    };
  });
};

const LogoMorph = () => {
  const slotRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const slot = slotRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduced = prefersReducedMotion();
    const last = LOGOS.length - 1;

    let cancelled = false;
    let raf = 0;
    let images = [];
    let W = 0;
    let H = 0;
    let box;
    let textures = [];
    let pieces = [];
    let flight = [];
    let seg = 0;
    let segStart = 0;
    let done = false;

    const layout = () => {
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const slotRect = slot.getBoundingClientRect();
      box = {
        x: slotRect.left - rect.left,
        y: slotRect.top - rect.top,
        width: slotRect.width,
        height: slotRect.height,
      };
      textures = images.map(img => buildTextures(img, box, dpr));
      const narrow = box.width < 600;
      pieces = buildPieces(box, narrow ? 7 : 12, narrow ? 2 : 3);
      if (TRANSITION_STYLES[seg]) flight = planFlight(TRANSITION_STYLES[seg], pieces, box);
    };

    const drawLogo = (k, alpha) => {
      ctx.globalAlpha = alpha;
      ctx.drawImage(textures[k].ink, box.x, box.y, box.width, box.height);
      ctx.globalAlpha = 1;
    };

    const drawTransition = p => {
      const fromTex = textures[seg - 1];
      const toTex = textures[seg];
      pieces.forEach((piece, i) => {
        const f = flight[i];
        const t = clamp01((p - f.delay) / (1 - MAX_DELAY));
        const arc = Math.sin(Math.PI * t);
        const lift = Math.sin(Math.PI * easeOut(t));
        const side = Math.floor(t * f.flips + 0.5) % 2 ? toTex : fromTex;
        const squash = Math.max(Math.abs(Math.cos(Math.PI * t * f.flips)), 0.02);
        const scale = 1 + 0.12 * arc;

        ctx.save();
        ctx.translate(
          piece.cx + f.dx * lift + Math.sin(t * Math.PI * 4) * f.sway * arc,
          piece.cy + f.dy * lift,
        );
        ctx.rotate(f.rot * arc);
        ctx.scale(scale, scale * squash);
        ctx.translate(-piece.cx, -piece.cy);
        ctx.clip(piece.path);
        if (arc > 0.01) {
          ctx.globalAlpha = arc * PAPER_ALPHA;
          ctx.drawImage(side.paper, box.x, box.y, box.width, box.height);
        }
        ctx.globalAlpha = (1 - arc) * INK_ALPHA;
        ctx.drawImage(side.ink, box.x, box.y, box.width, box.height);
        ctx.restore();
      });
    };

    const startSegment = (k, now) => {
      seg = k;
      segStart = now;
      if (TRANSITION_STYLES[k]) flight = planFlight(TRANSITION_STYLES[k], pieces, box);
    };

    const tick = now => {
      if (cancelled) return;
      ctx.clearRect(0, 0, W, H);
      if (done) {
        drawLogo(last, INK_ALPHA);
        return;
      }

      const style = TRANSITION_STYLES[seg];
      const dur = !style ? INTRO_MS : style === 'finale' ? FINALE_MS : TRANSITION_MS;
      const elapsed = now - segStart;
      const p = Math.min(elapsed / dur, 1);

      if (p >= 1) drawLogo(seg, INK_ALPHA);
      else if (!style) drawLogo(0, easeOut(p) * INK_ALPHA);
      else drawTransition(p);

      if (seg === last && elapsed >= dur) {
        done = true;
        return;
      }
      if (elapsed >= dur + HOLD_MS) startSegment(seg + 1, now);
      raf = requestAnimationFrame(tick);
    };

    const resizeObserver = new ResizeObserver(() => {
      if (!images.length) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width === W && rect.height === H) return;
      layout();
      if (done) tick(performance.now());
    });

    Promise.all(LOGOS.map(loadImage)).then(imgs => {
      if (cancelled) return;
      images = imgs;
      layout();
      resizeObserver.observe(slot);
      if (reduced) {
        done = true;
        tick(performance.now());
      } else {
        startSegment(0, performance.now());
        raf = requestAnimationFrame(tick);
      }
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <Slot ref={slotRef} aria-hidden="true">
      <Canvas ref={canvasRef} />
    </Slot>
  );
};

export default LogoMorph;
