import './style.css'

import { Title } from '../title'
import { Inputs } from '../inputs'
import { Buttom } from '../buttom'
import { Link } from '../link'

export function Form(){
    return(
        <div className="form-background">
            <div className='cabecalho'>
                <Title text='Login'/>
            </div>
            <div className='form-fields'>
                <Inputs text='User' />
                <Inputs text='Password' />
            </div>
            <div className='buttons'>
                <Buttom text='Login' destiny='https://discord.com/channels/1014299053149929473/1062175752612745266'/>
            </div>
            <div className='links'>
                <Link text='Esqueceu a senha?' destiny='https://www.google.com'/>
            </div>
        </div>
    )
}

// export default Form;