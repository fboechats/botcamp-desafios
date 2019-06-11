import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, LogoBotcamp, ExitBotcamp } from './styles';

const HeaderBotcamp = () => (
  <Wrapper>
    <LogoBotcamp />
    <Link to="/">
      <ExitBotcamp />
    </Link>
  </Wrapper>
);

export default HeaderBotcamp;
