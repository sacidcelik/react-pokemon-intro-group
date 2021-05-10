import './Card.css';
import Pokeball from './images/pokeball.svg';

export default function Card(props) {
  // const name = props.name;
  // const type = props.type
  const { name, type } = props;

  return (
    <article className="card" style={{ background: getColor(type) }}>
      <h2>{name}</h2>
      <p>{type}</p>
      <button>
        <img
          src={Pokeball}
          style={{ width: '30px', height: '30px' }}
          alt="Catch pokemon and add to pokeball"
        />
      </button>
    </article>
  );
}

function getColor(element) {
  const backgroundColors = {
    Elektro: 'yellow',
    Feuer: 'crimson',
    Pflanze: 'green',
    Wasser: 'deepskyblue',
    Frosch: 'limegreen',
    default: 'grey',
  };

  return backgroundColors[element]
    ? backgroundColors[element]
    : backgroundColors['default'];
}

// function getColor(element) {
//   let backgroundColor = '';

//   if (element === 'Elektro') {
//     backgroundColor = 'yellow';
//   } else if (element === 'Feuer') {
//     backgroundColor = 'red';
//   } else if (element === 'Pflanze' || element === 'Frosch') {
//     backgroundColor = 'green';
//   } else if (element === 'Wasser') {
//     backgroundColor = 'blue';
//   } else {
//     backgroundColor = 'grey';
//   }

//   switch (element) {
//     case 'Elektro':
//       backgroundColor = 'yellow';
//       break;
//     case 'Feuer':
//       backgroundColor = 'red';
//       break;
//     case 'Frosch':
//     case 'Pflanze':
//       backgroundColor = 'green';
//       break;
//     case 'Wasser':
//       backgroundColor = 'blue';
//       break;
//     default:
//       backgroundColor = 'grey';
//   }
//   return backgroundColor;
// }
