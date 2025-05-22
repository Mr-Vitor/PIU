import { useState, useEffect } from 'react';

export default function TemaToggle() {
  const [tema, setTema] = useState('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', tema === 'dark');
  }, [tema]);

  const alternarTema = () => {
    setTema((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      className="switchTheme"
      onClick={alternarTema}
    >
      {tema === 'light' ? 'Modo Escuro' : 'Modo Claro'}
    </button>
  );
}