import React from 'react';
import Page from '../Page';
import WordArtThemes from '../WordArtText/Themes';

const ItsOk = () => (
  <Page
    text='Mas tá tudo bemmmm'
    type={WordArtThemes.RAINBOW}
    audio={require('../../songs/allStar.mp3')}
    message={`
      A gente ainda vai se ver no futuro, porque sabe como é né, não vamos aguentar de saudade e vamos te que ir te visitar. Não vai ser um oceanozinho que vai separar a gente. E assim, meios tecnológicos estão ai pra ajudar nisso também. A gente super pode marcar de ir no tábuas enquanto você vai num pubzinho topzera por ai e fazer uma call pra você contar o tanto de país que você conheceu e dar uma aula de Holandês pra gente.
    `}
    images = {[
      [
        require('../../images/squad 4.gif'),
        require('../../images/tabuas 1.jpg'),
        require('../../images/titi.jpg'),
      ],
      [
        require('../../images/gaia 4.jpg'),
        require('../../images/me and u 6.jpg'),
        require('../../images/me and u 5.jpeg'),
      ],
      [
        require('../../images/jeff 2.jpg'),
        require('../../images/bianca 5.jpg'),
        require('../../images/bianca 7.jpg'),
      ]
    ]}
    animateIn='shake'
    animateOut='shake'/>
);

export default ItsOk;