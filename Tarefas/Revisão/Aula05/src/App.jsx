import Galeria from './components/Galeria'
import Tema from './components/Tema.jsx'
import './App.css'

import person1 from './assets/Aiko.jpg'
import person2 from './assets/Olive.jpg'
import person3 from './assets/Arthur.jpg'
import person4 from './assets/Erick.jpg'
import person5 from './assets/Kajin.jpg'
import person6 from './assets/Yuiko.jpg'

function App() {
  const characters = [
    {
      id: 1,
      nome: "Aiko Carter",
      descricao: "A feiticeira mais jovem",
      image: person1
    },
    {
      id: 2,
      nome: "Olive Carter",
      descricao: "A arteira das chamas",
      image: person2
    },
    {
      id: 3,
      nome: "Arthur",
      descricao: "O garoto que quebrou o tempo",
      image: person3
    },
    {
      id: 4,
      nome: "Erick",
      descricao: "A nevasca caminhante",
      image: person4
    },
    {
      id: 5,
      nome: "Kajin",
      descricao: "O renegado pelos céus",
      image: person5
    },
    {
      id: 6,
      nome: "Yuiko",
      descricao: "O receptáculo de Ryomen Sukuna",
      image: person6
    }
  ];

  return (
    <>
    <Tema>
      <h1>Galeria de personagens</h1>
      <br />
      <Galeria characters={characters}/>
    </Tema>
    </>
  )
}

export default App
