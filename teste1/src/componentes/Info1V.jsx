import { useState } from "react"
export default function Info1V(){

    // let contador = 0
    let [contador, setContador] = useState(0)

    function addNum(){
        return setContador(contador+1)
    }

    return(
        <>
            <button onClick={addNum}>Cliques feitos: {contador}</button>
        </>
    )
}