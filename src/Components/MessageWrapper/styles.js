import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  background-color: #eaeafd;

  img {
    width: 80px;
    height: 80px;
    margin: 0 20px 20px auto;
  }

  audio {
    margin: 0 20px 20px auto;
    color: orange;
  }
`;

export const MessageBotcamp = styled.p`
  font-family: "Roboto";
  color: white;
  padding-top: 11px;
  padding-left: 15px;
  width: 55%;
  height: 40px;
  background-color: rgba(238, 62, 37, 0.83);
  border-radius: 16px 0 16px 16px;
  margin: 0 16px 20px auto;
`;
