import { useNavigate, useLocation } from "react-router-dom";

import { Buttom } from "../../components/buttom";
import { Title } from "../../components/title";

import "../../App.css";
import "./style.css";
import { Subtitle } from "../../components/subtitle";
import { Profile } from "../../components/profile";

export const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { usersList } = location.state;

  function volteParaHome() {
    navigate("/");
  }
  return (
    <div className="App">
      <Title text={"Página Home"} />
      <br />
      <Subtitle text={"Lista de usuários cadastrados: "} />
      <ul>
        {usersList.map((user) => (
          <Profile key={user.id} img={user.img} name={user.username} email={user.email} />
        ))}
      </ul>
      <br />
      <div className="button-container">
        <Buttom text="voltar" aoClicar={volteParaHome} />
      </div>
    </div>
  );
};
