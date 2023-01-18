import './style.css'
import PropTypes from 'prop-types'

export const Buttom = ({text, redirecionar}) => {
    return(
        <button onClick={redirecionar}>{text}</button>
    )
}

Buttom.propTypes = {
    text: PropTypes.string,
    redirecionar: PropTypes.func,
}