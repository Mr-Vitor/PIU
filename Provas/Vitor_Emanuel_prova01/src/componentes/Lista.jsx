import Cars from "./Cars"
import './Lista.css'

//cria e exporta função com parametro 'params' para passar dados via props
export default function Lista({params}) {

    //cria um filtro 'info' que pega todos os dados de 'params' que possuem a cor vermelha
    const filtro = params.filter(info => info.cor == "vermelho" )
    
    return(
        <>
            <div>

                {/* uso da função map para usar os dados de 'params' */}
                <h2>Lista de automóveis</h2>
                {params.map((car) => (
                    <Cars
                    key={car.id}
                    modelo={car.modelo}
                    cor={car.cor}
                    ano={car.ano}
                    />
                ))}
                <h2>Automóveis filtrados</h2>
                <ul>

                    {/* uso da função map com o filtro criado anteriormente */}
                    {filtro.map(info => (
                        <li key={info.id}>
                            <p>{info.modelo} | {info.cor} | {info.ano}</p>
                        </li>
                
                ))}
                </ul>
            </div>
        </>
    )
}