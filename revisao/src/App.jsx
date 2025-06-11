import './App.css'
import Dashboard from './components/Dashboard'
import Tema from './components/Tema'
import dados from './components/Dados'

function App() {


  return (
    <>
    <Tema>
      <Dashboard tarefas={dados}/>
    </Tema>
    </>
  )
}

export default App
