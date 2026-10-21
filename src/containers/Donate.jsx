import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FundraisingProgress from '../components/FundraisingProgress';
import { size } from '../device';

const Page = styled.div`
  background-color: #faf8f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  max-width: 760px;
  margin: 0 auto;
  padding: 4rem 2rem;
  width: 100%;

  @media (max-width: ${size.mobile}) {
    padding: 2.5rem 1.5rem;
  }
`;

const Heading = styled.h1`
  font-family: 'Bitter', serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: #1c1c1c;
  margin: 0 0 0.5rem;
  text-decoration: underline;
  text-decoration-color: #7ecff4;
  text-decoration-thickness: 3px;
  text-underline-offset: 0.2em;
`;

const Subhead = styled.p`
  font-family: 'Merriweather', serif;
  font-size: 1.1rem;
  line-height: 1.75;
  color: #444;
  margin: 0 0 2.5rem;
`;

const EmbedWrapper = styled.div`
  position: relative;
`;

const EmbedFrame = styled.iframe`
  width: 100%;
  border: none;
  display: block;
`;

const Loader = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
  gap: 1rem;
  background-color: #faf8f5;
  font-family: 'Open Sans', sans-serif;
  color: #666;
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.$hidden ? 0 : 1)};
  pointer-events: ${(props) => (props.$hidden ? 'none' : 'auto')};

  &::before {
    content: '';
    width: 2.5rem;
    height: 2.5rem;
    border: 3px solid #e0ddd8;
    border-top-color: #7ecff4;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const embedHTML = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: transparent; }
  </style>
</head>
<body>
  <div class="qgiv-embed-container"
    data-qgiv-embed="true"
    data-embed-id="85790"
    data-embed="https://secure.qgiv.com/for/columbiadailyspectator/embed/85790/"
    data-width="630">
  </div>
  <script>
    (function(w,d,s,id){
      var js,fjs=d.getElementsByTagName(s)[0];
      if(d.getElementById(id))return;
      js=d.createElement(s);js.id=id;
      js.src="https://secure.qgiv.com/resources/core/js/embed.js";
      fjs.parentNode.insertBefore(js,fjs);
    })(window,document,'script','qgiv-embedjs');

    // Tell parent window to resize this iframe once Qgiv sets its height
    var observer = new MutationObserver(function() {
      window.parent.postMessage({ qgivHeight: document.body.scrollHeight }, '*');
    });
    observer.observe(document.body, { childList: true, subtree: true, attributes: true });

    // Tell parent window once the Qgiv form iframe has finished loading
    var loadObserver = new MutationObserver(function() {
      var form = document.querySelector('iframe');
      if (!form) return;
      loadObserver.disconnect();
      form.addEventListener('load', function() {
        window.parent.postMessage({ qgivLoaded: true }, '*');
      });
    });
    loadObserver.observe(document.body, { childList: true, subtree: true });
  </script>
</body>
</html>`;

const Donate = () => {
  const frameRef = React.useRef(null);
  const [loaded, setLoaded] = React.useState(false);

  const handleMessage = React.useCallback((e) => {
    const frame = frameRef.current;
    if (!frame || e.source !== frame.contentWindow || !e.data) return;
    if (e.data.qgivHeight) frame.style.height = e.data.qgivHeight + 40 + 'px';
    if (e.data.qgivLoaded) setLoaded(true);
  }, []);

  React.useEffect(() => {
    window.addEventListener('message', handleMessage);
    // Don't leave the loader up forever if the load signal never arrives
    const fallback = setTimeout(() => setLoaded(true), 10000);
    return () => {
      window.removeEventListener('message', handleMessage);
      clearTimeout(fallback);
    };
  }, [handleMessage]);

  return (
    <Page>
      <Navigation />
      <Main>
        <Heading>Donate</Heading>
        <Subhead>Support the next 150 years of the Columbia Daily Spectator.</Subhead>
        {/*<FundraisingProgress />*/}
        <EmbedWrapper>
          <EmbedFrame
            ref={frameRef}
            srcDoc={embedHTML}
            title="Donation Form"
            height="900"
            scrolling="no"
          />
          <Loader $hidden={loaded} aria-hidden={loaded}>
            Loading secure donation form…
          </Loader>
        </EmbedWrapper>
      </Main>
      <Footer />
    </Page>
  );
};

export default Donate;
