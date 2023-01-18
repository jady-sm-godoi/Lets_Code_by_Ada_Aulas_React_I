import { useNavigate } from "react-router-dom";

import './style.css'
import '../../App.css'

import { Title } from '../../components/title'
import { Inputs } from '../../components/inputs'
import { Buttom } from '../../components/buttom'
import { Link } from '../../components/link'


export const Form = () => {

    const navigate = useNavigate()

    const vaParaHome = () => {
        const userName = document.querySelectorAll('.data-form')
        if(userName[0].value !== '' && userName[1].value !== ''){
            navigate('/home')
        }
    }

    const vaParaCadastro = () => {
        navigate('/sign-up')
    }

    const vaParaRecuperarPassword = () => {
        navigate('/recover-password')
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
                <Link text='Não é cadastrado?' destiny={vaParaCadastro}/>
            </div>
            <div className='links'>
                <Link text='Esqueceu a senha?' destiny={vaParaRecuperarPassword}/>
            </div>
        </div>
        </div>
    )
}

// export default Form;