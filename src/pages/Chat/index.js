import React, { useState } from "react";

import MessageWrapper from "../../Components/MessageWrapper";
import Header from "../../Components/HeaderBotcamp";
import Footer from "../../Components/FooterBotcamp";

const Chat = () => {
  const [inputMessage, setInput] = useState("");
  const [userMessages, setMessage] = useState([]);
  const [userFiles, setFile] = useState([]);
  const [recording, setRecording] = useState(false);
  const [records, setRecord] = useState([]);

  const handleInput = event => {
    event.preventDefault();
    setMessage([...userMessages, inputMessage]);
    setInput("");
  };

  const imgUrl = (file, callback) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => callback(reader.result);
  };

  const handleChange = event => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    imgUrl(file, imgUrl => {
      setFile([...userFiles, imgUrl]);
    });
    event.target.value = null;
  };

  const handleStartRecord = () => {
    if (recording === false) setRecording(true);

    if (recording === true) setRecording(false);
  };

  const audioUrl = (file, callback) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => callback(reader.result);
  };

  const handleRecord = ({ blob }) => {
    const file = blob;

    if (!file) {
      return;
    }

    audioUrl(file, audioUrl => {
      setRecord([...records, audioUrl]);
    });
  };

  return (
    <>
      <Header />

      <MessageWrapper
        records={records}
        userFiles={userFiles}
        userMessages={userMessages}
      />

      <Footer
        recording={recording}
        handleStartRecord={handleStartRecord}
        handleRecord={handleRecord}
        handleChange={handleChange}
        setFile={setFile}
        handleInput={handleInput}
        inputMessage={inputMessage}
        setInput={setInput}
      />
    </>
  );
};

export default Chat;
