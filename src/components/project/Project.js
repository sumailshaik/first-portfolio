import React from 'react';
import {
  Container,
  Grandient,
  Main,
  Title,
  Des,
  Icon,
  Image,
  Number,
} from './Project.Elements';

const Project = () => {
  return (
    <Container>
      <Image src="http://wpuploads.appadvice.com/wp-content/uploads/2014/03/image222.jpg" />
      <Number>02</Number>
      <Grandient>
        <Main>
          <Title>Real Time Messaging App</Title>
          <Des>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            velit quam. Duis viverra ipsum a neque molestie auctor. Ut posuere
            scelerisque lorem, ac iaculis quam dapibus aliquam.
          </Des>
          <Icon>
            <svg
              width="30"
              height="30"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0V80H80V0H0ZM48.4467 65.3C47.0933 65.56 46.6667 64.73 46.6667 64.02V56.7033C46.6667 54.2133 45.7933 52.5933 44.8333 51.7667C50.7733 51.1067 57.0133 48.85 57.0133 38.61C57.0133 35.6967 55.9767 33.3167 54.2667 31.4533C54.5433 30.78 55.4567 28.0667 54.0033 24.3967C54.0033 24.3967 51.7667 23.68 46.6767 27.13C44.5467 26.53 42.2667 26.24 40 26.2267C37.7333 26.2367 35.4533 26.53 33.3233 27.1233C28.23 23.6733 25.99 24.39 25.99 24.39C24.5433 28.0633 25.4567 30.7733 25.7333 31.45C24.0267 33.3167 22.9867 35.6933 22.9867 38.6067C22.9867 48.82 29.21 51.11 35.1367 51.7867C34.3733 52.4533 33.6833 53.6267 33.4433 55.3533C31.92 56.0333 28.0633 57.21 25.6833 53.1333C25.6833 53.1333 24.2733 50.5733 21.5933 50.3833C21.5933 50.3833 18.9933 50.35 21.41 52.0067C21.41 52.0067 23.16 52.8267 24.3733 55.9067C24.3733 55.9067 25.9167 60.6667 33.3333 59.0533V64.0167C33.3333 64.72 32.9033 65.5467 31.5733 65.3C20.9733 61.7767 13.3333 51.78 13.3333 40C13.3333 25.27 25.2733 13.3333 40 13.3333C54.7267 13.3333 66.6667 25.27 66.6667 40C66.6667 51.7767 59.0367 61.77 48.4467 65.3V65.3Z"
                fill="#FFFDFD"
              />
            </svg>
          </Icon>
        </Main>
      </Grandient>
    </Container>
  );
};

export default Project;
