import './style.css'

export function Inputs({text}){
    return(
        <div className='input-container'>
            <label htmlFor={text}>{text}</label>
            <input name={text}/>
        </div>
    )
}