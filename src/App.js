import Card from './Card';
import { useState } from 'react';
import Pokeball from './Pokeball';
function App() {
  const pokemon = [
    { name: 'Pikachu', type: 'Elektro' },
    { name: 'Glumanda', type: 'Feuer' },
    { name: 'Bisasam', type: 'Pflanze' },
    { name: 'Schiggy', type: 'Wasser' },
    { name: 'Smettbo', type: 'Käfer' },
    { name: 'Vulpix', type: 'Feuer' },
    { name: 'Pummeluff', type: 'Fee' },
    { name: 'Taubsi', type: 'Flug' },
    { name: 'Raupi', type: 'Käfer' },
    { name: 'Sichlor', type: 'Käfer' },
    { name: 'Abra', type: 'Psycho' },
    { name: 'Enton', type: 'Wasser' },
    { name: 'Ratzfratz', type: 'Normal' },
    { name: 'Kleinstein', type: 'Stein' },
  ];

  const [wildPokemon, setWildPokemon] = useState(pokemon);
  const [pokeballs, setPokeballs] = useState([]);

  function catchPokemon(name) {
    const pokemonToCatch = wildPokemon.find((pokemon) => pokemon.name === name);
    setPokeballs([pokemonToCatch, ...pokeballs]);
    removePokemonFromWild(name);
  }

  function removePokemonFromWild(name) {
    const freePokemon = wildPokemon.filter((pokemon) => pokemon.name !== name);
    setWildPokemon(freePokemon);
  }

  function releasePokemon(name) {
    const remainingPokemon = pokeballs.filter(
      (pokemon) => pokemon.name !== name
    );
    const pokemonToRelease = pokeballs.find((pokemon) => pokemon.name === name);
    setWildPokemon([pokemonToRelease, ...wildPokemon]);
    setPokeballs(remainingPokemon);
  }

  return (
    <div>
      <h1>Pokemon</h1>
      <h3>My Pokeballs ({pokeballs.length})</h3>
      <section className="flex-container">
        {pokeballs.map((pokemon) => (
          <Pokeball
            name={pokemon.name}
            type={pokemon.type}
            onReleasePokemon={releasePokemon}
          />
        ))}
      </section>
      {wildPokemon.map((pokemon) => (
        <Card
          name={pokemon.name}
          type={pokemon.type}
          onCatchPokemon={catchPokemon}
        />
      ))}
    </div>
  );
}

export default App;
