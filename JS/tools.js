// const sinoSosHacete = (array, clase) =>
// array instanceof clase ? array : arrayFrom(array, clase);
const arrayFrom = (value, clase, key) =>
  Array.from(getLocal(key) || value, (item) => new clase(item));

function saveToLocal(key, valor) {
  localStorage.setItem(key, JSON.stringify(valor));
}

function getLocal(key) {
  return JSON.parse(localStorage.getItem(key));
}
