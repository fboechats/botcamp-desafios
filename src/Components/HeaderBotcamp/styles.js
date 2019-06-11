import styled from 'styled-components';

import exit from '../../img/exit.png';
import logo from '../../img/logo.png';

export const Wrapper = styled.header`
  height: 66px;
  display: flex;
  position: relative;
  justify-content: space-between;
  background-color: #26265e;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
  padding: 10px 16px;

  ::after {
    content: '';
    position: absolute;
    bottom: 1.8px;
    left: 0;
    transform: translateY(100%);
    border-top: 14px solid #26265e;
    border-left: 100vw solid transparent;
  }
`;

export const LogoBotcamp = styled.img.attrs({
  src: logo,
  alt: 'Logo do aplicativo BotCamp',
})`
  width: 248px;
`;

export const ExitBotcamp = styled.img.attrs({
  src: exit,
  alt: 'Icone de logout',
})`
  margin-top: 10px;
  width: 30px;
  height: 30px;
`;
