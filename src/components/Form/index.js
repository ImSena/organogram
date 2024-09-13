import './Formulario.css'
import Input from '../Input'
import ListDropdown from '../ListDropdown'
import Button from '../Button'
import { useState } from 'react'

const Form = (props) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState(props.times[1]);


    const onSave = (event)=>
    {
        event.preventDefault();

        if(nome != '' && cargo != '' && imagem != '' && time != ''){
            props.timeSubmit({
                nome, cargo, imagem, time
            })
            setNome('');
            setCargo('');
            setImagem('');
            setTime('');
        }else{
            alert('Preencha os campos!')
        }

        
    }

    return (
        <section className="formulario">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do time</h2>
                <Input 
                label={"Nome"} 
                aoAlterado={(value)=>setNome(value)} 
                placeholder={"Digite seu nome"} 
                value={nome}/>

                <Input 
                label={"Cargo"} 
                aoAlterado={(value)=>setCargo(value)} 
                value={cargo} 
                placeholder={"Digite seu cargo"} />

                <Input 
                obrigatorio={false} 
                label={"Imagem"} 
                placeholder={"Digite o endereço da imagem"} aoAlterado={(value)=>setImagem(value)} 
                value={imagem}/>

                <ListDropdown 
                label={"Time"} 
                item={props.times}
                value={time}
                aoAlterado={valor => setTime(valor)}
                />

                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form