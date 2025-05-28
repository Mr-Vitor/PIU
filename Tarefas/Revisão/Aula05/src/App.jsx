import Galeria from './components/Galeria'
import Tema from './components/Tema.jsx'
import './App.css'

import person1 from './assets/arteiro.jpg'

function App() {
  const characters = [
    {
      id: 1,
      nome: "Aiko Carter",
      descricao: "A feiticeira mais jovem",
      image: person1
    },
  ]

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
