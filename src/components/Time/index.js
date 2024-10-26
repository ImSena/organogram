import Card from '../Card';
import './Time.css'

const Time = (props) => {
    return (
        props.colaboradores.length > 0 &&
        <section className='time' style={{ backgroundColor: props.corFundo, color: props.corDestaque }}>
            <h3 style={{ borderColor: props.corDestaque }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Card key={colaborador.nome} corDeFundo={props.corDestaque} nome={colaborador.nome} cargo={colaborador.cargo} caminho={colaborador.imagem} />)}
            </div>
        </section>
    );
}

export default Time