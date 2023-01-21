import './style.css'
import PropTypes from 'prop-types'
export const Inputs = ({text, changing, color}) => {

    return(
        <div className='input-container'>
            <label style={{color: color}} htmlFor={text}>{text}</label>
            <input className='data-form' name={text} onChange={changing}/>
        </div>
    )
}

Inputs.propTypes = {
    text: PropTypes.string
}
Inputs.defaultProps = {
    text: 'Usuário'
}