import React from 'react';
import Anime from '../anime/Anime';
import {
  Container,
  Left,
  Main,
  Info,
  Greeting,
  Content,
  Name,
  Des,
  Bottom,
  Btn,
  BtnBorder,
  Right,
} from './Hero.Elements';

const Hero = () => {
  return (
    <Container>
      <Left>
        <Main>
          <Info>
            <Greeting>Hy! I Am,</Greeting>
            <Content>
              <Name>Sumail Shaik</Name>
            </Content>
            <Des>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              velit quam. Duis viverra ipsum a neque molestie auctor.
            </Des>
          </Info>
          <Bottom>
            <Btn>About Me</Btn>
          </Bottom>
        </Main>
      </Left>
      <Right>
        <Anime />
      </Right>
    </Container>
  );
};

export default Hero;
