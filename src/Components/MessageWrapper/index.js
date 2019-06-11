import React from "react";
import PropTypes from "proptypes";

import { Wrapper, MessageBotcamp } from "./styles";

const MessageWrapper = ({ records, userMessages, userFiles }) => (
  <Wrapper>
    {userMessages.map(message => (
      <MessageBotcamp key={Math.random()}>{message}</MessageBotcamp>
    ))}

    {userFiles.map(file => (
      <img key={Math.random()} src={file} alt="prévia de seu arquivo" />
    ))}

    {records.map(record => (
      <audio key={Math.random()} controls>
        <source src={record} />
      </audio>
    ))}
  </Wrapper>
);

MessageWrapper.propTypes = {
  userMessages: PropTypes.arrayOf(PropTypes.string).isRequired,
  userFiles: PropTypes.arrayOf(PropTypes.string).isRequired,
  records: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default MessageWrapper;
