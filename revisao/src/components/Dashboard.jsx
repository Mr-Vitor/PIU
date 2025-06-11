import Tarefas from "./Tarefas";
import "./Dashboard.css"

export default function Dashboard ({tarefas}) 
{
    return(
        <>
         <div className="dashboard">
            <h1>Lista de tarefas</h1>
            {tarefas.map((tasks) => (
                <Tarefas
                    key={tasks.id}
                    nome={tasks.titulo}
                />
            ))}
        </div>
        </>
    )
}