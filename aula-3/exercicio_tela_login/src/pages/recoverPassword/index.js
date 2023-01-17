import { useNavigate } from "react-router-dom";

import './style.css'
import '../../App.css'

import { Title } from '../../components/title'
import { Inputs } from '../../components/inputs'
import { Buttom } from '../../components/buttom'

export function Recover(){

    const navigate = useNavigate()

    function vaParaLogin(){
        navigate('/')
    }

    return(
        <div className="App">
        <div className="form-background">
            <div className='cabecalho'>
                <Title text='Recuperar senha'/>
            </div>
            <div className='form-fields'>
                <Inputs text='e-mail' />
            </div>
            <div className='buttons'>
                <Buttom text='Enviar' redirecionar={vaParaLogin} />
            </div>            
        </div>
        </div>
    )
}

// export default Form;