import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  box-shadow: 2px 3px 10px 3px rgba(187, 171, 171, 0.31);
`;
export const Top = styled.div`
  width: 100%;
  height: 250px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 140px;
`;
export const Title = styled.p`
  margin-top: 15px;
  margin-bottom: 7px;
  font-size: 22px;
  padding-left: 15px;
`;
export const Desc = styled.p`
  font-size: 13px;
  padding: 0 15px 10px 15px;
  text-align: justify;
  text-justify: inter-word;
`;
