import './style.css'
import PropTypes from 'prop-types'

export const Link = ({text, destiny}) => {
    return(
        <span onClick={destiny} target='_blank' rel="noopener noreferrer">{text}</span>
    )
}

Link.propTypes ={
    text: PropTypes.string,
    destiny: PropTypes.func,
}