import React from 'react';
import styled from 'styled-components';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MyImage = styled.img`
  width: 300px;
  height: 300px;
`;

const Gallery = () => {
  const myImage = require('../images/image.png');

  const stop = (e) => {
    e.preventDefault();
  };

  return (
    <AliceCarousel
      mouseDragEnabled 
      dotsDisabled={false}
      buttonsDisabled={true}
      responsive={{
        0: {
            items: 1
        },
        560: {
          items: 2
        },
        1024: {
            items: 3
        }
      }}
    >
      <MyImage src={myImage} onMouseDown={stop}/>
      <MyImage src={myImage} onMouseDown={stop}/>
      <MyImage src={myImage} onMouseDown={stop}/>
      <MyImage src={myImage} onMouseDown={stop}/>
      <MyImage src={myImage} onMouseDown={stop}/>
    </AliceCarousel>
  );
}

export default Gallery;