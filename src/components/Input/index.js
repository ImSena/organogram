import './Input.css';

const Input = ({ label, placeholder, type = "text" }) => {
    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input placeholder={placeholder} type={type} />
        </div>
    )
}

export default Input;