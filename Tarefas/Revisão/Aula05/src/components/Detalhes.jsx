export default function Detalhes (character)
{
    // character == null ? return null;
    return(
        <div>
        <h2>{character.nome}</h2>
        <img src={character.image} alt={character.nome} />
        <figcaption>{character.descricao}</figcaption>
        </div>
        
    )
}