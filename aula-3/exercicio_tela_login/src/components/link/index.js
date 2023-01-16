import './style.css'

export function Link({text, destiny}){
    return(
        <a href={destiny} target='_blank' rel="noopener noreferrer">{text}</a>
    )
}