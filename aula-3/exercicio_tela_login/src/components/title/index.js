import './style.css'

export function Title({text}){
    return(
        <div className='title-container'>
            <h1>{text}</h1>
        </div>
    )
}