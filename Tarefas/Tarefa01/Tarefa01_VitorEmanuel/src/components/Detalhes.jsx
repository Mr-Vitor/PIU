export default function Detalhes(props)
{   
    return(
        <>
            <div>
                <h1>{props.nome}</h1>
                <img src={props.caminho} alt={props.nome} className="detalheImg" />
                <p>{props.descricao}</p>
            </div>
        </>
    )
}