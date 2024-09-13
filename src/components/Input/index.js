import './Input.css';

const Input = ({ label, placeholder, type = "text", obrigatorio=true, value, aoAlterado}) => {


    const aoDigitado = (event) =>{
        aoAlterado(event.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input onChange={aoDigitado} required={obrigatorio} placeholder={placeholder} type={type} value={value}/>
        </div>
    )
}

export default Input;