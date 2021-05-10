import './App.css';
import Card from './Card';

function App() {
  const pokemon = [
    { name: 'Pikachu', type: 'Elektro' },
    { name: 'Glumanda', type: 'Feuer' },
    { name: 'Bisasam', type: 'Pflanze' },
    { name: 'Schiggy', type: 'Wasser' },
    { name: 'Smettbo', type: 'Käfer' },
    { name: 'Smettbo', type: 'Elektro' },
    { name: 'Froggy', type: 'Frosch' },
  ];

  return (
    <div className="App">
      <h1>Pokemon</h1>
      {pokemon.map((pokemon) => (
        <Card name={pokemon.name} type={pokemon.type} />
      ))}
    </div>
  );
}

export default App;
