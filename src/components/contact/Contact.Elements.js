import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;
export const Top = styled.div`
  text-align: center;
  font-size: 35px;
  padding: 30px 0;
`;
export const Bottom = styled.div`
  width: 100%;
  display: flex;
`;
export const Left = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AnimeSection = styled.div``;
export const Form = styled.form`
  width: 60%;
  height: 70%;
`;

export const Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin: 20px 0;
  height: 35px;
  padding: 10px;
  outline: none;
`;

export const TextArea = styled.textarea`
  margin: 20px 0;
  padding: 10px;
  outline: none;
`;

export const Send = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.div`
  margin-top: 20px 0;
  text-align: center;
  text-transform: uppercase;
  padding: 5px;
  background: white;
  border-width: 4px;
  border-style: solid;
  border-image: linear-gradient(
      60deg,
      rgba(92, 56, 194, 0.85),
      rgba(178, 56, 144, 1)
    )
    1;
`;
