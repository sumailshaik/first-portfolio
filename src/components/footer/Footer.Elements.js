import styled from 'styled-components';

export const Container = styled.div`
  height: 65px;
  display: flex;
  justify-content: space-between;
`;
export const Left = styled.div`
  padding: 10px;
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.p`
  margin-left: 30px;
  font-size: 20px;
  font-weight: 400;
`;
export const Copy = styled.p`
  margin-left: 30px;
  font-size: 12px;
  font-weight: 300;
`;
export const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Icon = styled.div`
  margin-right: 30px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
