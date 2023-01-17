import { useNavigate } from "react-router-dom";

import './style.css'
import '../../App.css'

import { Title } from '../../components/title'
import { Inputs } from '../../components/inputs'
import { Buttom } from '../../components/buttom'
import { Link } from '../../components/link'


export function Form(){

    const navigate = useNavigate()

    function vaParaHome(){
        navigate('/home')
    }

    return(
        <div className="App">
        <div className="form-background">
            <div className='cabecalho'>
                <Title text='Login'/>
            </div>
            <div className='form-fields'>
                <Inputs text='User' />
                <Inputs text='Password' />
            </div>
            <div className='buttons'>
                <Buttom text='Entrar' redirecionar={vaParaHome} />
            </div>
            <div className='links'>
                <Link text='Esqueceu a senha?' destiny='https://www.google.com'/>
            </div>
        </div>
        </div>
    )
}

// export default Form;