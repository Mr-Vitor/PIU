import "./Detalhes.css"

export default function Detalhes ({character})
{
    if (character === null){
        return null;
    } else 
    {
    return(
        <div className="detalhes">
            <h2>{character.nome}</h2>
            <img src={character.image} alt={character.nome} />
            <figcaption>{character.descricao}</figcaption>
        </div>
    )
    }
}