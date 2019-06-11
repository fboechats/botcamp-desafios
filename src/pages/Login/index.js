import React from "react";
import { Link } from "react-router-dom";

import BgBotcamp from "../../Components/BgBotcamp";
import { LogoBotcamp } from "../../Components/HeaderBotcamp/styles";
import BtnBotcamp from "../../Components/BtnBotcamp";

const Login = () => (
  <BgBotcamp>
    <LogoBotcamp />
    <Link to="/Chat">
      <BtnBotcamp content="Entrar" />
    </Link>
  </BgBotcamp>
);

export default Login;
