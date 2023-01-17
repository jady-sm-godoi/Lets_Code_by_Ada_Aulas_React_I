import './style.css'

export function Buttom({text, redirecionar}){
    return(
        <button onClick={redirecionar}>{text}</button>
    )
}