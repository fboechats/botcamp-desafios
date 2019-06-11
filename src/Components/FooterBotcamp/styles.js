import styled from "styled-components";

export const Container = styled.div`
  form {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
  }

  .clip {
    position: absolute;
    bottom: 5px;
    right: 61px;
  }

  .visualizer {
    display: none;
  }
`;

export const TextInput = styled.input.attrs({
  type: "text",
  placeholder: "Diz aí..."
})`
  width: 100%;
  height: 50px;
  box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.1);
  background-color: #fbfbff;
  padding: 14px 11px 14px 16px;
  color: rgba(0, 0, 0, 0.33);
  font-family: Roboto;
  font-size: 20px;
  border: none;
`;

export const Mic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 5px;
  right: 11px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #ee3e25;
`;
