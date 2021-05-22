function addNewYork() {
  let url = 'http://api.weatherstack.com/current?access_key=b2c95dbeb5acda548ce25c2d18c41411&query=New York'
  fetch(url)
    .then(response => response.json())
    .then(answer => postData(answer));
}

function postData(elements) {
  const contenido = document.querySelector('#data');
  let html = '';
  const { name, region, lat } = elements.location;
  const { observation_time, temperature } = elements.current;
  html += `  
      <tr><td data-label="Name">${name}</td><td data-label="Region">${region}</td><td data-label="Lat">${lat}</td><td data-label="Time">${observation_time}</td><td data-label="Temperature">${temperature}</td></tr>
    `

  contenido.innerHTML = html;
}

addNewYork();