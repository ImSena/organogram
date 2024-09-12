import './Formulario.css'
import Input from '../Input'

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do time</h2>
                <Input label={"Nome"} placeholder={"Digite seu nome"} />
                <Input label={"Cargo"} placeholder={"Digite seu cargo"} />
                <Input label={"Imagem"} placeholder={"Digite o endereço da imagem"} />
            </form>
        </section>
    )
}

export default Formulario