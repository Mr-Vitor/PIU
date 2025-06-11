import { useState } from "react";
import './Contador.css'

export default function Contador () {
    //Variavel em usestate que controla o número de cliques realizados e sua função atrelada
    //Valor default em 0
    const [num, setNum] = useState(0);
    const [statePos, setStatePos] = useState('menor')
    const [stateNeg, setStateNeg] = useState('positivo')

    //função que chama 'setNum' para adicionar ao valor de 'num'
    const addNum = () => (
        setNum((prov) => prov += 1)
    );
    //função que chama 'setNum' para deduzir do valor de 'num'
    const subNum = () => (
        setNum((prov) => prov -= 1)
    );

    const toggleStatePos = () => (
        setStatePos((pos) => (pos >= 10 ? "maior" : "menor"))
    );

    const toggleStateNeg = () => (
        setStateNeg((neg) => (neg < 0 ? "negativo" : "positivo"))
    );

    function addTogglePos () {
        addNum();
        toggleStatePos();
    };

    function subToggleNeg () {
        subNum();
        toggleStateNeg();
    }
    

    

    return(
        <div className="contador">
            <h2>Contador incremental e decremental</h2>
            {/* Mostra da variável e dois botões com evento 'onClick' para adicionar ou subtrair */}
            <p>Cliques: {num}</p> 
            <div className="line">
                <button className={statePos} onClick={addTogglePos}>+1</button>
                <button className={stateNeg} onClick={subToggleNeg}>-1</button>
            </div>

        </div>
    )

}