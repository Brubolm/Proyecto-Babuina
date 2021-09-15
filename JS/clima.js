const kelvin = 273.15;

const APIKEY = "15f58731a7611490346c512ba8905124";
const URL = `http://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires,Ar&appid=`;

async function consultarApi(apiKey, url) {
  console.log(url);
  const respuesta = await fetch(url + apiKey);
  const resultado = await respuesta.json();
  return resultado;
}

function printClima(clima) {
  let { main } = clima;
  console.log(main);
  let divResultado = document.querySelector("#divResultado");

  divResultado.innerHTML = `
  <div class="clima">
  <p class="temperatura">
  ${parseFloat(main.temp - kelvin, 10).toFixed(2)} <span> ºC;</span>
  </p>
  <p class="temperaturas"> Máx. 
  ${parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span> ºC;</span>
  </p>
  <p class="temperaturas"> Min. 
  ${parseFloat(main.temp_min - kelvin, 10).toFixed(2)} <span> ºC;</span>
  </p>
  </div>
  `;
}

consultarApi(APIKEY, URL).then((jsonClima) => printClima(jsonClima));
