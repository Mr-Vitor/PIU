import './App.css'
import Card from './components/Card'
import Galeria from './components/Galeria'
import Detalhes from './components/Detalhes'
import Tema from './components/Tema'
import arthur from './assets/Arthur.webp'
import olive from './assets/Olive.webp'
import erick from './assets/Erick.webp'
import kajin from './assets/Kajin.webp'
import yukio from './assets/Yuiko.webp'
import aiko from './assets/Aiko.jfif'

function App() {

  return (
    <>
      <Tema/>
      <Galeria>
        <Card nome="Arthur" imagem={arthur} descricao="O garoto que quebrou o tempo"/>
        <Card nome="Arthur" imagem={arthur} descricao="O garoto que quebrou o tempo"/>
        <Card nome="Arthur" imagem={arthur} descricao="O garoto que quebrou o tempo"/>
        <Card nome="Arthur" imagem={arthur} descricao="O garoto que quebrou o tempo"/>
        <Card nome="Arthur" imagem={arthur} descricao="O garoto que quebrou o tempo"/>
        <Card nome="Arthur" imagem={arthur} descricao="O garoto que quebrou o tempo"/>
      </Galeria>

    </>
  )
}

export default App
