import SlimSelect from 'slim-select';

import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

const catsList = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');

// const slimSelect = new SlimSelect({
//   select: catsList,
//   settings: {
//     placeholderText: 'Search breeds',
//   },
// });

catsList.addEventListener('change', onBreedClick);

fetchBreeds()
  .then(function ({ data }) {
    data.map(catBreed => {
      const option = document.createElement('option');
      option.value = catBreed.id;
      option.textContent = catBreed.name;
      catsList.insertAdjacentElement('beforeend', option);
    });
  })
  .catch(function (error) {
    catInfo.innerHTML =
      '<p class="error">Oops! Something went wrong! Try reloading the page!</p>';
    console.log('Error message', error.message);
  });

function onBreedClick(params) {
  fetchCatByBreed(params.target.value)
    .then(function ({ data }) {
      catInfo.innerHTML = `
        <img src="${data[0].url}" alt="${data[0].breeds[0].name}" title="${data[0].breeds[0].name}" height="500">
        <h1 class="cat-name">${data[0].breeds[0].name}</h1>
        <p class="cat-descr">${data[0].breeds[0].description}</p>
<h2>Temperament:</h2>
        <p class="cat-descr">${data[0].breeds[0].temperament}</p>`;
    })
    .catch(function (error) {
      catInfo.innerHTML =
        '<p class="error">Oops! Something went wrong! Try reloading the page!</p>';
      console.log('Error message', error.message);
    });
}
