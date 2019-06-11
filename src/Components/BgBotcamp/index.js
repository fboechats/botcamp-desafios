import styled from 'styled-components';

import background from '../../img/background.png';

const BgBotcamp = styled.main`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 120px;
  padding-bottom: 80px;
  width: 100vw;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
`;

export default BgBotcamp;
