import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Time from './components/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#fde7e8',
      corSecundaria: '#e06b69'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#fae9f5',
      corSecundaria: '#db6ebf'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#fff5d9',
      corSecundaria: '#ffba05'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#ffeedf',
      corSecundaria: '#ff8a29'
    },


  ]

  const [colaboradores, setColaboradores] = useState([]);

  const addColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Form
        timeSubmit={colaborador => addColaborador(colaborador)}
        times={times.map(time => time.nome)}
      />

      {
        times.map(item =>
         
          <Time
            nome={item.nome}
            key={item.nome}
            corFundo={item.corPrimaria}
            corDestaque={item.corSecundaria}
            colaboradores={
              colaboradores.filter(colaborador => colaborador.time === item.nome)
            } />)

      }

    </div>
  );
}

export default App;
