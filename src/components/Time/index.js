import Card from '../Card';
import './Time.css'

const Time = (props) => {
    return (
        props.colaboradores.length > 0 &&
        <section className='time' style={{ backgroundColor: props.corFundo, backgroundColor: props.corDestaque }}>
            <h3 style={{ borderColor: props.corFundo }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Card nome={colaborador.nome} cargo={colaborador.cargo} caminho={colaborador.imagem} />)}
            </div>
        </section>
    );
}

export default Time