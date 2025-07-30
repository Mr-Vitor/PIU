import { useState } from "react"

export default function Login() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const password = "AlunoIFRN"

    // Função chamada após o envio do formulário que checa igualdade das 
    // palavras chaves, mudando de preto para verde em sucesso
    const handleSubmit = (e) => {
        e.preventDefault();
        if (senha === password) {
            document.body.style.backgroundColor = "#538536"
        } else {
            document.body.style.backgroundColor = "#242424"
        }

        //Reset dos campos de email e senha
        setEmail("")
        setSenha("")
    }

    //Formulário com campos de "email" e "senha"
    return(
        <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={email} onChange={(e)=>(setEmail(e.target.value))} placeholder="Digite um Email" />
            <input type="text" value={senha} onChange={(e)=>(setSenha(e.target.value))} placeholder="Digite uma Senha" />
            <input type="submit" value="Enviar" />
        </form>
        </>
    )
}