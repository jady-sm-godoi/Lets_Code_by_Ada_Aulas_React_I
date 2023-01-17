import { useNavigate } from "react-router-dom";

import './style.css'
import '../../App.css'

import { Title } from '../../components/title'
import { Inputs } from '../../components/inputs'
import { Buttom } from '../../components/buttom'


export function SingUp(){

    const navigate = useNavigate()

    function vaParaLogin(){
        navigate('/')
    }

    return(
        <div className="App">
        <div className="form-background">
            <div className='cabecalho'>
                <Title text='Registrar'/>
            </div>
            <div className='form-fields'>
                <Inputs text='User' />
                <Inputs text='Password' />
                <Inputs text='Repeat password' />
            </div>
            <div className='buttons'>
                <Buttom text='Registrar' redirecionar={vaParaLogin} />
            </div>
        </div>
        </div>
    )
}

// export default Form;