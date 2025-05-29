export default function Card(props)
{
    return(
        <>
            <div className="card">
                <img src={props.imagem} alt={props.nome} className="cardImg" style={{width: 200}}/>
                <p className="cardName">{props.nome}</p>
            </div>
        </>
    )
}