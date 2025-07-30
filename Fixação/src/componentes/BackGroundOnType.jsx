import { useState, useEffect } from 'react'

export default function BackGroundOnType() {
  const [text, setText] = useState("")

  //useeffect (configurar, dependencias?)

  function handleColor(){
            const cor = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#835AFD"];
            const randomColor = cor[Math.floor(Math.random() * cor.length)];
            document.body.style.backgroundColor = randomColor;

    }

  useEffect(() => {
    handleColor()
  }, [{text}])

  return (
    <>
      <div className="card">
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder='Digite seu texto aqui'></textarea>
      </div>
    </>
  )
}