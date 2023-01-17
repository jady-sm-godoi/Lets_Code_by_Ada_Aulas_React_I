import './style.css'

export function Link({text, destiny}){
    return(
        <span onClick={destiny} target='_blank' rel="noopener noreferrer">{text}</span>
    )
}