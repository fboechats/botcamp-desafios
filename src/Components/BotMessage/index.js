import React from 'react';
import PropTypes from 'proptypes';

import { Container, Avatar, Message } from './styles';

import BotImage from '../../img/botcamp.png';

const BotMessage = ({ content }) => (
  <Container>
    <Avatar>
      <img src={BotImage} alt="Avatar Bot" />
    </Avatar>
    <Message>{content}</Message>
  </Container>
);

BotMessage.propTypes = {
  content: PropTypes.string.isRequired,
};

export default BotMessage;
