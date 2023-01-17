import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import {Form} from './pages/Login'
import { Home } from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Form />} ></Route>
        <Route exact path="/home" element={<Home />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
