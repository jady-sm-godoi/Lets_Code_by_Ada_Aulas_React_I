import { useNavigate } from "react-router-dom";

import { Buttom } from "../../components/buttom"

import '../../App.css'
import './style.css'

export const Home = () => {
    const navigate = useNavigate()

    function volteParaHome(){
        navigate('/')
    }
    return (
        <div className="App">
            <h1>Página Home</h1>
            <div className="button-container">
                <Buttom text='voltar' aoClicar={volteParaHome}/>
            </div>
        </div>
    )
}