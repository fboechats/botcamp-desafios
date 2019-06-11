import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Message = styled.p`
  font-family: 'Roboto';
  color: #333333;
  padding-top: 11px;
  padding-left: 15px;
  width: 55%;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.83);
  border-radius: 0 16px 16px 16px;
  border: 1px solid #d7d7ea;
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #26265e;
  border-radius: 20px;
  margin-left: 16px;
  margin-right: 10px;

  img {
    width: 25;
    height: 25px;
  }
`;
