import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import {Form} from './pages/Login'
import { Home } from "./pages/home/Home";
import { SingUp } from "./pages/signUp";
import { Recover } from "./pages/recoverPassword";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Form />} ></Route>
        <Route exact path="/sign-up" element={<SingUp />}></Route>
        <Route exact path="/recover-password" element={<Recover />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
