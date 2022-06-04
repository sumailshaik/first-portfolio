import React from 'react';
import Project from '../project/Project';
import { Container, Top, Title, Bottom, Main } from './Work.Elements';

const Work = () => {
  return (
    <Container>
      <Top>
        <Title>Latest Work</Title>
      </Top>

      <Bottom>
        <Main>
          <Project />
          <Project />
        </Main>
      </Bottom>
    </Container>
  );
};

export default Work;
