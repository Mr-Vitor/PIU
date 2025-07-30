import { useState, useEffect } from "react";

export default function MudaTema() {
    const [light, setLight] = useState(true)

    function toggleTema() {
        if (light === false) {
            document.body.style.backgroundColor = "Black"
            document.documentElement.style.backgroundColor = "Black"
            document.documentElement.style.color = "White"
        } else {
            document.body.style.backgroundColor = "White"
            document.documentElement.style.backgroundColor = "White"
            document.documentElement.style.color = "Black"
        }
    }

     useEffect(()=>{toggleTema()},[light])
    
    return(
        <>
            <h1>Título em {light ? "Light" : "Dark"} mode</h1>
            <button onClick={() => setLight(!light)}>Mudar para {light ? "Dark" : "Light"} mode</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sunt doloremque dolor quod! Delectus ex atque quidem nam</p>
        </>
    )
}