import './EscopoReduz.css'

const EscopoReduz = () => {
    function handleClick(){
        return(
            alert("handleClick")
        )
    }
    return(
        <>
            <button onClick={() => console.log("Clicastes!!")}>Clique</button>
            <br />
            <div>
                <button onClick={() => alert("Clicou!!")}>Novo Botão</button>
            </div>
            <div>
                <button onClick={handleClick}>handleClick</button>
            </div>
            <div className='container' onClick={() => alert("container alert!!")}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto laboriosam nulla quo omnis voluptatibus possimus similique architecto</p>
            </div>
        </>
    )
}

export default EscopoReduz