import SlimSelect from 'slim-select';
import 'slim-select/styles';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');

const slimSelect = new SlimSelect({
  select: '#selectElement',
  settings: {
    placeholderText: 'Search breeds',
  },
  events: {
    afterChange: newVal => {
      loader.classList.remove('visually-hidden');
      catInfo.innerHTML = '';
      onBreedClick(newVal);
    },
  },
});

function errorMessage() {
  iziToast.show({
    title: 'Error',
    message: 'Oops! Something went wrong! Try reloading the page!',
    position: 'topRight',
    color: 'red',
  });
}

loader.classList.remove('visually-hidden');

fetchBreeds()
  .then(function ({ data }) {
    let optionsList = [];
    data.map(catBreed => {
      optionsList.push({ text: catBreed.name, value: catBreed.id });
    });

    slimSelect.setData([{ placeholder: true, text: '' }, ...optionsList]);

    loader.classList.add('visually-hidden');
  })
  .catch(function (error) {
    loader.classList.add('visually-hidden');
    errorMessage();
    console.log('Error message', error.message);
  });

function onBreedClick(value) {
  fetchCatByBreed(value[0].value)
    .then(function ({ data }) {
      if (!data[0].breeds[0]) {
        loader.classList.add('visually-hidden');
        return;
      }
      const { name, description, temperament, origin, country_code } =
        data[0].breeds[0];
      catInfo.innerHTML = `
        <img src="${data[0].url}" alt="${name}" title="${name}" width="750" class="cat-photo">
        <div class="cat-info_wrapper">
            <h1 class="cat-name">${name}</h1>
            <p class="cat-descr">${description}</p>
            <h2 class="title">Temperament:</h2>
            <p class="cat-descr">${temperament}</p>
            
            <h2 class="title">Location:</h2>
            <div class="cat-location">
                <img
                    alt="${origin}"
                    src="http://purecatamphetamine.github.io/country-flag-icons/3x2/${country_code}.svg" width="20"/>
                <span>${origin}</span>
            </div>
        </div>`;
      loader.classList.add('visually-hidden');
    })
    .catch(function (error) {
      loader.classList.add('visually-hidden');
      errorMessage();
      console.log('Error message', error.message);
    });
}
