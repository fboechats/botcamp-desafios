import React from "react";
import PropTypes from "proptypes";
import ReactUploadFile from "react-upload-file";
import { ReactMic } from "react-mic";

import MicIcon from "../../img/mic.png";
import ClipIcon from "../../img/clip.png";

import { Container, TextInput, Mic } from "./styles";

const options = {
  baseUrl: "http://127.0.0.1"
};

const FooterBotcamp = ({
  handleInput,
  setInput,
  inputMessage,
  handleChange,
  recording,
  handleStartRecord,
  handleRecord
}) => (
  <Container>
    <form onSubmit={handleInput}>
      <TextInput
        value={inputMessage}
        onChange={e => setInput(e.target.value)}
      />
    </form>

    <label htmlFor="upload">
      <img className="clip" src={ClipIcon} alt="icone do clip" />
    </label>

    <ReactUploadFile
      options={options}
      chooseFileButton={
        <button type="button" onChange={handleChange} id="upload" />
      }
    />

    <ReactMic record={recording} onStop={handleRecord} />

    <Mic onClick={handleStartRecord}>
      <img src={MicIcon} alt="icone do microfone" />
    </Mic>
  </Container>
);

FooterBotcamp.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  setInput: PropTypes.func.isRequired,
  inputMessage: PropTypes.string.isRequired
};

export default FooterBotcamp;
