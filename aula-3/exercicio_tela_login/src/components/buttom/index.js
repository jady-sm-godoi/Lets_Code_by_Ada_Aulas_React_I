import './style.css'

export function Buttom({text, destiny}){
    return(
        <a href={destiny} target='_blank' rel="noopener noreferrer">
            <button>{text}</button>
        </a>
    )
}