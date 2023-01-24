import { useNavigate } from "react-router-dom";

// import "./style.css";
import "../styles.css";
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
  const [showError, setShowError] = useState(false);
  const [labelColor, setLabelColor] = useState("white");
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [users] = useState([
    {
      id: 1,
      username: "jady",
      password: "123",
    },
    {
      id: 2,
      username: "ciabatta",
      password: "miau",
    },
    {
      id: 2,
      username: "zeca",
      password: "miau",
    },
    {
      username: "cesar",
      password: "123",
    },
  ]);

  const mudaTitulo = () => {
    setTitle("Welcome,");
  };

  const vaParaHome = () => {
    const userSelected = users.find(
      (u) => u.username === user && u.password === password
    );

    if (userSelected) {
      navigate("/home");
    } else {
      setShowError(true);
      setLabelColor("#d33b64");
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
          {showError ? (
            <Subtitle text="Usuário não encontrado!" />
          ) : (
            <span>Por favor, entre com login e senha!</span>
          )}
        </div>
        <div className="form-fields">
          <Inputs
            color={labelColor}
            changing={(e) => setUser(e.target.value)}
          />
          <Inputs
            color={labelColor}
            changing={(e) => setPassword(e.target.value)}
            text="Password"
          />
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
        <br></br>
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              onClick={() => {
                console.log("alterado");
              }}
            >
              {user.username}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// export default Form;
