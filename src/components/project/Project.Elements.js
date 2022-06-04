import styled from 'styled-components';

export const Container = styled.div`
  color: white;
  position: relative;
  width: 503px;
  height: 300px;
  // border: 2px solid red;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Number = styled.p`
  z-index: 2;
  position: absolute;
  right: -1px;
  top: -15px;
  color: white;
  font-size: 70px;
`;
export const Main = styled.div`
  width: 90%;
  height: 70%;
`;
export const Grandient = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: -webkit-linear-gradient(
    60deg,
    rgba(3, 22, 23, 0.96),
    rgba(92, 56, 194, 0.96)
  );
`;

export const Title = styled.p`
  margin-bottom: 20px;
  font-size: 25px;
`;
export const Des = styled.p`
  margin-bottom: 20px;
  text-align: justify;
  text-justify: inter-word;
`;

export const Icon = styled.div``;
