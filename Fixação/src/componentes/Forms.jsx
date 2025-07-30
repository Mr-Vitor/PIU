import { useState, useEffect } from "react"

export default function Forms() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [users, setUsers] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let usuario = {
            "email": email,
            "senha": senha
        }

        setUsers([...users, usuario])

        console.log(users)

        setEmail("")
        setSenha("")
    }

    useEffect(() => {
        console.log("Usuários atualizados:", users);
    }, [users]);


    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={email} onChange={(e)=>(setEmail(e.target.value))} placeholder="Digite um Email" />
            <input type="text" value={senha} onChange={(e)=>(setSenha(e.target.value))} placeholder="Digite um Senha" />
            <input type="submit" value="Enviar" />
        </form>
        </>
    )
}