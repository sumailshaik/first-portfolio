import React from 'react';
import { Container, Top, Image, Content, Title, Desc } from './Blog.Elements';
const Blog = () => {
  return (
    <Container>
      <Top>
        <Image src="https://www.biteinteractive.com/wp-content/uploads/2021/05/git-vs-github.png" />
      </Top>
      <Content>
        <Title>Git & Github</Title>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
          velit quam. Duis viverra ipsum a neque molestie auctor. Ut posuere
          lorem, viverra i a neque molestie auctor ac iaculis ...
        </Desc>
      </Content>
    </Container>
  );
};

export default Blog;

// https://www.biteinteractive.com/wp-content/uploads/2021/05/git-vs-github.png
// https://www.biteinteractive.com/wp-content/uploads/2021/03/iOS-posts-23.png
// https://www.biteinteractive.com/wp-content/uploads/2021/06/git-merges.png
