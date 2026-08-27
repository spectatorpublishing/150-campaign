import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
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

const EmbedFrame = styled.iframe`
  width: 100%;
  border: none;
  display: block;
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
  </script>
</body>
</html>`;

const Donate = () => {
  const handleMessage = React.useCallback((e) => {
    if (e.data && e.data.qgivHeight) {
      const frame = document.getElementById('qgiv-frame');
      if (frame) frame.style.height = e.data.qgivHeight + 40 + 'px';
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [handleMessage]);

  return (
    <Page>
      <Navigation />
      <Main>
        <Heading>Donate</Heading>
        <Subhead>Support the next 150 years of the Columbia Daily Spectator.</Subhead>
        <EmbedFrame
          id="qgiv-frame"
          srcDoc={embedHTML}
          title="Donation Form"
          height="900"
          scrolling="no"
        />
      </Main>
      <Footer />
    </Page>
  );
};

export default Donate;
