import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 75px);
  display: flex;
`;

export const Left = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.div``;
export const Info = styled.div``;

export const Greeting = styled.p`
  font-size: 38px;
  margin-bottom: 5px;
  font-weight: 500;
`;
export const Content = styled.p`
  font-size: 38px;
  margin-bottom: 5px;
`;
export const Name = styled.span`
  font-weight: 500;
  // background: -webkit-linear-gradient(
  //   60deg,
  //   rgba(78, 248, 237, 1),
  //   rgba(178, 56, 144, 1)
  // );
  // -webkit-background-clip: text;

  // -webkit-text-fill-color: transparent;
`;
export const Des = styled.p`
  font-size: 16px;
  text-align: justify;
  text-justify: inter-word;
`;
export const Bottom = styled.div``;
export const Btn = styled.button`
  margin-top: 10px;
  text-align: center;
  text-transform: uppercase;
  padding: 5px;
  background: white;
  border-width: 4px;
  border-style: solid;
  border-image: linear-gradient(
      60deg,
      rgba(78, 248, 237, 1),
      rgba(178, 56, 144, 1)
    )
    1;
`;
export const Right = styled.div`
  width: 60%;
`;
