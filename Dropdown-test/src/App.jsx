import './App.css'
import Dropdown from './components/Dropdown'

function App() {

  const links=['Link1','Link2','Link3','Link4', 'Link5'];
  const titulos=['Menu1','Menu2','Menu3','Menu4', 'Menu5'];

  return (
    <>
      <Dropdown titulos={titulos} links={links}/>
    </>
  )
}

export default App
