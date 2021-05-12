import getColor from './lib/Color';
import OpenPokeball from './images/open-pokeball.png';
import styled from 'styled-components/macro';

export default function Pokeball({ name, type, onReleasePokemon }) {
  return (
    <Ball background={getColor(type)}>
      <h2>{name}</h2>
      <p>{type}</p>
      <button onClick={() => onReleasePokemon(name)}>
        <img src={OpenPokeball} width="30" height="30" alt="Let pokemon free" />
      </button>
    </Ball>
  );
}

const Ball = styled.article`
  background: ${(props) => props.background || 'salmon'};
  border-radius: 50%;
  color: white;
  display: grid;
  gap: 0.5rem;
  height: 12rem;
  padding: 0.3rem;
  place-items: center;
  width: 12rem;

  h3,
  p {
    margin: 0;
  }

  button {
    background: transparent;

    font-size: 2rem;
    padding-top: 0.2rem;
    border-radius: 50%;

    cursor: pointer;
  }

  button:hover {
    transform: rotate(-25deg);
    transition: transform ease-in 0.3s;
  }
`;
