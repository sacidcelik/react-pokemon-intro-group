export default function getColor(element) {
  const backgroundColors = {
    Elektro: 'goldenrod',
    Feuer: 'orangered',
    Pflanze: 'green',
    Wasser: 'aqua',
    Käfer: 'lightgreen',
    Fee: 'lightpink',
    default: 'grey',
  };

  return backgroundColors[element]
    ? backgroundColors[element]
    : backgroundColors['default'];
}
