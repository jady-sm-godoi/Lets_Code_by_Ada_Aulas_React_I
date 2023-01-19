import './style.css'
import PropTypes from 'prop-types'

export const Buttom = ({text, aoClicar, color, bgColor}) => {
    return(
        <button style={{background: bgColor, color:color}} onClick={aoClicar} >{text}</button>
    )
}

Buttom.propTypes = {
    text: PropTypes.string,
    aoClicar: PropTypes.func,
    bgColor: PropTypes.string,
    color: PropTypes.string,
}

Buttom.defaultProps = {
    bgColor: '#a13954',
    color: '#fff'
}