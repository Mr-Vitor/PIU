import { useState } from "react";
import "./Tarefas.css"

export default function Tarefa({nome})
{
    const [status, setStatus] = useState('pendente')

    const toggleTask = () => (
        setStatus((prov) => (prov === 'pendente' ? 'concluida' : 'pendente'))
    );
    return (
        <div className={status}>
            <div className="linha-tarefa">
                <h2>{nome}</h2>
                <button onClick={toggleTask}>
                {status === "concluida" ? "Desmarcar" : "Concluir"}
                </button>
            </div>
        </div>
    );
}