import { useState } from "react"

import "./Tema.css"

export default function Tema({children})
{
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => (
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
    )
    return(   
        <>
            <div className={theme}>
                <button onClick={toggleTheme}>
                    Alternar Tema ({theme === 'light' ? 'Escuro' : 'Claro'})
                </button>
                {children}
            </div>
        </>
    )
}