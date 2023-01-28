import { useNavigate, useLocation } from "react-router-dom";

import { Buttom } from "../../components/buttom";
import { Title } from "../../components/title";

import "../../App.css";
import "./style.css";
import { Subtitle } from "../../components/subtitle";
import { Profile } from "../../components/profile";
import { useEffect, useState } from "react";

export const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { usersList, logged } = location.state;
  
  const [contador, setContador] = useState(0);
  const [activeButton, setActiveButton] = useState(true);
  const [newUsersList, setNewUserList] = useState([]);

  //armazenando no localStorage
  const newUsersListJson = JSON.stringify(newUsersList);
  localStorage.setItem("users", newUsersListJson);
  localStorage.setItem('log', logged)

  //recuperando do localStorage
  const getLocalStorage = localStorage.getItem('users')
  const storageNewUsersList = JSON.parse(getLocalStorage)
  const usuarioLogado = localStorage.getItem('log')


  function volteParaHome() {
    navigate("/");
  }

  const handleContador = () => {
    if (contador < usersList.length - 1) {
      setContador(contador + 1);
    } else {
      setActiveButton(false);
    }
  };

  useEffect(() => {
    setNewUserList((prev) => [...prev, usersList[contador]]);
  }, [contador, usersList]);

  useEffect(()=> {
    return () => {
      console.log('desmontando...')
      localStorage.clear()
    };
  }, [])

  return (
    <div className="App">
      <span>usuário logado: {usuarioLogado}</span>
      <Title text={"Página Home"} />
      <Subtitle text={"Lista de usuários cadastrados: "} />
      <h2>{activeButton ? contador + 1 : "Fim!"}</h2>
      <br />
      <ul>
        {storageNewUsersList.map((user) => (
          <Profile
            key={user.id}
            img={user.img}
            name={user.username}
            email={user.email}
          />
        ))}
      </ul>
      <br />

      <div className="button-container">
        {activeButton && (
          <Buttom
          text="novo usuário"
          aoClicar={handleContador}
        />
        )}
        <Buttom text="voltar" aoClicar={volteParaHome}  />
      </div>
    </div>
  );
};
