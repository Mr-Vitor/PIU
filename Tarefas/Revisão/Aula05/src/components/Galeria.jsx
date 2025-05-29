import { useState } from "react"
import Card from "./Card"
import Detalhes from "./Detalhes"

import "./Galeria.css"

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
                            name={char.nome}
                            image={char.image}
                            onClick={() => handleSelectedChar(char)}
                        />
                ))}
            </div>
            <div className="extra">
                <Detalhes character={selectedChar} />
            </div>
        </>
    )
}