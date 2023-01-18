import './style.css'
import PropTypes from 'prop-types'
export const Inputs = ({text}) => {
    return(
        <div className='input-container'>
            <label htmlFor={text}>{text}</label>
            <input className='data-form' name={text}/>
        </div>
    )
}

Inputs.propTypes = {
    text: PropTypes.string
}