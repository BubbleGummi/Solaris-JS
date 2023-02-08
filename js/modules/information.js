const INFO_ELEMS = {
  NAME: document.querySelector('.info__name'),
  LATIN_NAME: document.querySelector('.info__latin-name'),
  DESC: document.querySelector('.info__desc'),
  CIRCUMFERENCE: document.querySelector('#circumference'),
  DISTANCE: document.querySelector('#distance'),
  MAX_TEMP: document.querySelector('#max-temp'),
  MIN_TEMP: document.querySelector('#min-temp'),
  MOONS: document.querySelector('#moons'),
};

function changeInfo(planetData) {
  INFO_ELEMS.NAME.innerText = planetData.name;
  INFO_ELEMS.LATIN_NAME.innerText = planetData.latinName;
  INFO_ELEMS.DESC.innerText = planetData.desc;
  INFO_ELEMS.CIRCUMFERENCE.innerText = formatNumber(planetData.circumference);
  INFO_ELEMS.DISTANCE.innerText = formatNumber(planetData.distance);

  const temperatures = Object.values(planetData.temp);
  INFO_ELEMS.MAX_TEMP.innerText = getMax(temperatures);
  INFO_ELEMS.MIN_TEMP.innerText = getMin(temperatures);

  INFO_ELEMS.MOONS.innerText = planetData.moons.join(', ');
}

function getMax(temperatures) {
  return Math.max(...temperatures);
}

function getMin(temperatures) {
  return Math.min(...temperatures);
}

function formatNumber(number) {
  return new Intl.NumberFormat().format(number);
}

export { changeInfo };
