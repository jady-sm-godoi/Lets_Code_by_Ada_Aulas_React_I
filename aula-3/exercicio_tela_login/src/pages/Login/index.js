import { useNavigate } from "react-router-dom";

// import "./style.css";
import '../styles.css'
import "../../App.css";
import { useState } from "react";

import { Title } from "../../components/title";
import { Inputs } from "../../components/inputs";
import { Buttom } from "../../components/buttom";
import { Link } from "../../components/link";
import { Subtitle } from "../../components/subtitle";

export const Form = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("login");
  const [subtitle, setSubtitle] = useState();
  const [users] = useState([
    {
      username: "jady",
      password: "123",
    },
    {
      username: "ciabatta",
      password: "miau",
    },
  ]);

  const mudaTitulo = () => {
    setTitle("Welcome,");
  };

  const mudarSubtitulo = () => {
    const user = document.querySelector(".data-form").value;
    setSubtitle(user);
  };

  const vaParaHome = () => {
    const userName = document.querySelectorAll(".data-form");

    const userExist = users.filter(
      (user) =>
        user.username === userName[0].value &&
        user.password === userName[1].value
    );

    if (userExist.length > 0) {
      navigate("/home");
    } else {
      alert("usuário ou senha estão incorretos!");
    }
  };

  const vaParaCadastro = () => {
    navigate("/sign-up");
  };

  const vaParaRecuperarPassword = () => {
    navigate("/recover-password");
  };

  return (
    <div className="App">
      <div className="form-background">
        <div className="cabecalho">
          <Title text={title} />
        </div>
        <div className="cabecalho">
          <Subtitle text={subtitle} />
        </div>
        <div className="form-fields">
          <Inputs changing={mudarSubtitulo} />
          <Inputs text="Password" />
        </div>
        <div className="buttons-container">
          <div className="buttons">
            <Buttom text="Entrar" aoClicar={vaParaHome} />
          </div>
          <div className="buttons">
            <Buttom
              text="Trocar título"
              aoClicar={mudaTitulo}
              bgColor="green"
            />
          </div>
        </div>
        <div className="links">
          <Link text="Não é cadastrado?" destiny={vaParaCadastro} />
        </div>
        <div className="links">
          <Link text="Esqueceu a senha?" destiny={vaParaRecuperarPassword} />
        </div>
      </div>
    </div>
  );
};

// export default Form;
