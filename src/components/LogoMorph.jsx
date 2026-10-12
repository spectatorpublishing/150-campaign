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

const INTRO_MS = 900;
const FADE_MS = 900;
const HOLD_MS = 1000;

const INK_RGB = [255, 255, 255];
const INK_ALPHA = 1.0;
const INK_DARK = 60;
const INK_LIGHT = 150;

const Slot = styled.div`
  position: relative;
  width: min(72vw, 640px, 90vh);
  aspect-ratio: 1710 / 300;
  margin-bottom: 3vh;
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const clamp01 = t => (t < 0 ? 0 : t > 1 ? 1 : t);
const easeInOut = t => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

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

// Returns the y position of the lowest dark pixel as a fraction of image height.
const findBaselineFrac = (img) => {
  const W = 300;
  const H = Math.round(img.height * W / img.width);
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const g = c.getContext('2d');
  g.drawImage(img, 0, 0, W, H);
  const { data } = g.getImageData(0, 0, W, H);
  for (let y = H - 1; y >= 0; y--) {
    for (let x = 0; x < W; x++) {
      const i = (y * W + x) * 4;
      if (data[i + 3] < 50) continue;
      const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
      if (lum < 150) return y / H;
    }
  }
  return 1.0;
};

const buildInkTexture = (img, box, dpr) => {
  const w = Math.ceil(box.width * dpr);
  const h = Math.ceil(box.height * dpr);
  const paper = document.createElement('canvas');
  paper.width = w; paper.height = h;
  const pg = paper.getContext('2d');
  const scale = Math.min(w / img.width, h / img.height);
  const dw = img.width * scale;
  const dh = img.height * scale;
  pg.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);

  const ink = document.createElement('canvas');
  ink.width = w; ink.height = h;
  const ig = ink.getContext('2d');
  const pixels = pg.getImageData(0, 0, w, h);
  const d = pixels.data;
  for (let i = 0; i < d.length; i += 4) {
    const lum = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
    const a = clamp01((INK_LIGHT - lum) / (INK_LIGHT - INK_DARK)) * (d[i + 3] / 255);
    d[i] = INK_RGB[0]; d[i + 1] = INK_RGB[1]; d[i + 2] = INK_RGB[2];
    d[i + 3] = a * 255;
  }
  ig.putImageData(pixels, 0, 0);
  return ink;
};

// Computes per-logo y offsets (in CSS px) so all baselines land at the same y.
// We align to the deepest natural baseline; logos with a higher natural baseline
// shift down to match. Only bottom whitespace is clipped — no text is lost.
const computeBaselineOffsets = (images, baselineFracs, box) => {
  const naturalBaselines = images.map((img, i) => {
    const scale = Math.min(box.width / img.width, box.height / img.height);
    const dh = img.height * scale;
    const naturalTop = (box.height - dh) / 2;
    return naturalTop + baselineFracs[i] * dh;
  });
  const target = Math.max(...naturalBaselines);
  return naturalBaselines.map(bl => target - bl);
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
    let baselineFracs = [];
    let baselineOffsets = [];
    let W = 0, H = 0;
    let box;
    let textures = [];
    let seg = 0;
    let segStart = 0;
    let done = false;

    const layout = () => {
      const rect = canvas.getBoundingClientRect();
      W = rect.width; H = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const slotRect = slot.getBoundingClientRect();
      box = { x: 0, y: 0, width: slotRect.width, height: slotRect.height };
      textures = images.map(img => buildInkTexture(img, box, dpr));
      baselineOffsets = computeBaselineOffsets(images, baselineFracs, box);
    };

    const drawLogo = (k, alpha) => {
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
      ctx.drawImage(textures[k], box.x, box.y + baselineOffsets[k], box.width, box.height);
      ctx.globalAlpha = 1;
    };

    const startSegment = (k, now) => { seg = k; segStart = now; };

    const tick = now => {
      if (cancelled) return;
      ctx.clearRect(0, 0, W, H);

      if (done) { drawLogo(last, INK_ALPHA); return; }

      const dur = seg === 0 ? INTRO_MS : FADE_MS;
      const elapsed = now - segStart;
      const p = clamp01(elapsed / dur);
      const eased = easeInOut(p);

      if (seg === 0) {
        drawLogo(0, eased * INK_ALPHA);
      } else {
        drawLogo(seg - 1, (1 - eased) * INK_ALPHA);
        drawLogo(seg, eased * INK_ALPHA);
      }

      if (seg === last && p >= 1) { done = true; return; }
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
      baselineFracs = imgs.map(findBaselineFrac);
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
