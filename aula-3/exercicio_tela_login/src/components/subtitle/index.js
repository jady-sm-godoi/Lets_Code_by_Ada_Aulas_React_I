import './style.css'
import PropTypes from 'prop-types'

export function Subtitle({text}){
    return(
        <div className='title-container'>
            <h2>{text}</h2>
        </div>
    )
}

Subtitle.propTypes = {
    text: PropTypes.string
}

Subtitle.defaultProps = {
    text: 'Usuário'
}