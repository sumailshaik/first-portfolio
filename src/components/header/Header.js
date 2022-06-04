import React from 'react';
import { Container, Top, Title, Bottom, Nav, Item } from './Header.Elements';
const Header = () => {
  return (
    <Container>
      <Top>
        <Title>SUMAIL .</Title>
      </Top>
      <Bottom>
        <Nav>
          <Item>Work</Item>
          <Item>Writing</Item>
          <Item>Contact</Item>
        </Nav>
      </Bottom>
    </Container>
  );
};

export default Header;
