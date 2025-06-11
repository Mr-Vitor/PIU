import './App.css'
//importação dos componentes usados e lista de dados JS
import Contador from './componentes/Contador'
import Lista from './componentes/Lista'
import { carros } from './componentes/dados_carro'

function App() {

  return (
    <>
    {/* implementação dos componentes, um dos quais é passado parâmetro */}
      <Contador/>
      <Lista params={carros}/>

    </>
  )
}

export default App
