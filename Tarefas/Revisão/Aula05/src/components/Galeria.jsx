import { useState } from "react"
import Card from "./Card"
import Detalhes from "./Detalhes"
export default function Galeria({characters})
{
    const [selectedChar, setSelectedChar] = useState(null)

     function handleSelectedChar (char) {
        setSelectedChar(char)
    }

    return(
        <>
            <div className="galeria">
                {characters.map((char) => (
                        <Card
                            key={char.id}
                            name={char.name}
                            image={char.image}
                            onClick={() => handleSelectedChar(char)}
                        />
                ))}
                <Detalhes character={selectedChar} />
            </div>
        </>
    )
}