import React from 'react';
import { Container, Top, Bottom } from './Writing.Elements';
import Blog from '../blog/Blog';
const Writing = () => {
  return (
    <Container>
      <Top>Latest Writings</Top>
      <Bottom>
        <Blog />
        <Blog />
        <Blog />
      </Bottom>
    </Container>
  );
};

export default Writing;
