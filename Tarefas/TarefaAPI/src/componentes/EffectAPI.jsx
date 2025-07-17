import { useState, useEffect } from 'react';

export default function EffectAPI() {
  const [names, setNames] = useState([]);
  const [usernames, setUsernames] = useState([]);
  const [cities, setCities] = useState([]);

  const [loadNames, setLoadNames] = useState(false);
  const [loadUsernames, setLoadUsernames] = useState(false);
  const [loadCities, setLoadCities] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      return await response.json();
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      return [];
    }
  };

  useEffect(() => {
    if (loadNames) {
      fetchData().then(data => {
        setNames(data.map(user => ({ id: user.id, name: user.name })));
        setLoadNames(false);
      });
    }
  }, [loadNames]);

  useEffect(() => {
    if (loadUsernames) {
      fetchData().then(data => {
        setUsernames(data.map(user => ({ id: user.id, username: user.username })));
        setLoadUsernames(false);
      });
    }
  }, [loadUsernames]);

  useEffect(() => {
    if (loadCities) {
      fetchData().then(data => {
        setCities(data.map(user => ({ id: user.id, city: user.address.city })));
        setLoadCities(false);
      });
    }
  }, [loadCities]);

  return (
    <div>
      {/* Nomes */}
      <table className="tabela-nomes">
        <thead>
          <tr><th>Lista de Nomes</th></tr>
        </thead>
        <tbody>
          {names.map(item => (
            <tr key={item.id}><td>{item.name}</td></tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setLoadNames(true)}>Resgatar Nomes</button>

      <br /><br />

      {/* Usernames */}
      <table className="tabela-usernames">
        <thead>
          <tr><th>Lista de Usernames</th></tr>
        </thead>
        <tbody>
          {usernames.map(item => (
            <tr key={item.id}><td>{item.username}</td></tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setLoadUsernames(true)}>Resgatar Usernames</button>

      <br /><br />

      {/* Cidades */}
      <table className="tabela-cidades">
        <thead>
          <tr><th>Lista de Cidades</th></tr>
        </thead>
        <tbody>
          {cities.map(item => (
            <tr key={item.id}><td>{item.city}</td></tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setLoadCities(true)}>Resgatar Cidades</button>
    </div>
  );
}
