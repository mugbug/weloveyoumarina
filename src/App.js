import React from 'react';
import styled from 'styled-components';

import WordArtText from './components/WordArtText';
import WordArtThemes from './components/WordArtText/Themes';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

// import './components/SparklyCursor';

const bg = require('./images/header-bg.jpg');

const Container = styled.div`
  height: ${window.innerHeight}px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContainerImage = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const TitleContainerImage = styled(ContainerImage)`
  background-image: url(${bg});
  opacity: 0.6;
`

function App() {
  return (
    <>
      <Container>
        <TitleContainerImage />
        <WordArtText text='We love you Marina!' type={WordArtThemes.RAINBOW} fontSize='6em' />
        <div style={{marginTop: '9em'}} />
        <div style={{padding: '0 8%'}}>
          <WordArtText
            text='Este site é destinado a guardar a lembrança dos ótimos momentos que vivemos juntxs no Brasil até a data de 12/07/2019.'
            fontSize='3em'
            type={WordArtThemes.PURPLE}
          />
        </div>
      </Container>
      <Container>
        <Gallery />
      </Container>
      <Footer />
    </>
  );
}

export default App;
