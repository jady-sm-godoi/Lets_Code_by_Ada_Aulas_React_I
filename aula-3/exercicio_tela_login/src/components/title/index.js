import './style.css'
import PropTypes from 'prop-types'

export function Title({text}){
    return(
        <div className='title-container'>
            <h1>{text}</h1>
        </div>
    )
}

Title.propTypes = {
    text: PropTypes.string
}