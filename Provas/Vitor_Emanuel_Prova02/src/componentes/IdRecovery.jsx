import { useEffect } from "react";
import { useState } from "react";

export default function IdRecovery() {
    const [id, setId] = useState(0)
    const [holder, setHolder] = useState("")
    const [users, setUsers] = useState([])

    const fetchUsuarios = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/albums'); //fecth faz uma requisição HTTP utilizando o método GET
          const data = await response.json(); //await faz com que a requisição aguarde os dados chegarem. O método json converte os dados para json
          setUsers(data); // Atualiza o estado com os dados recebidos
        } catch (error) {
          console.error("Erro ao buscar usuários:", error);
        } finally {
          setLoading(false); // Finaliza o carregamento
        }
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        setId(parseInt(holder))
        setHolder("")
      }

      let filtro = users.filter(entry => entry.userId === id)


      useEffect(() => {fetchUsuarios()},[id]);

      return (
        <div>
          <h1>Lista de Entradas</h1>

          <form onSubmit={handleSubmit}>
            <input type="text" value={holder} onChange={(e)=>(setHolder(e.target.value))} />
            <input type="submit" value="Enviar"/>
          </form>

          <ul>
            {filtro.map(entry => (
              <li key={entry.userId}>{entry.id} | {entry.title}</li>
            ))}
          </ul>
        </div>
      );

}