import './Cars.css'

//Função que orienta a disposição dos carros (com informações passadas via props)
export default function Cars({modelo, cor, ano}) {
    return(
        <ul>
            <li>{modelo}</li>
            <li>{ano}</li>
            <li>{cor}</li>
        </ul>
    )
}