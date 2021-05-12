import Pokeball from './images/pokeball.svg';
import getColor from './lib/Color';
import styled from 'styled-components/macro';

export default function Card(props) {
  // const name = props.name;
  // const type = props.type
  const { name, type, onCatchPokemon } = props;

  return (
    <CardWrapper background={getColor(type)}>
      <h2>{name}</h2>
      <p>{type}</p>
      <button onClick={() => onCatchPokemon(name)}>
        <img
          src={Pokeball}
          width="30"
          height="30"
          alt="Catch pokemon and add to pokeball"
        />
      </button>
    </CardWrapper>
  );
}

const CardWrapper = styled.article`
  background: ${(props) => props.background || 'salmon'};
  color: ivory;
  padding: 0.3rem;
  margin: 0.2rem;
  border-radius: 0.5rem;
  display: grid;
  place-items: center;

  h2,
  p {
    text-shadow: 0 -0.5px 2px lightslategray;
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    transition: transform ease-out 0.2s;
  }

  button:hover {
    transform: rotate(-25deg);
    transition: transform ease-in 0.3s;
  }
`;
