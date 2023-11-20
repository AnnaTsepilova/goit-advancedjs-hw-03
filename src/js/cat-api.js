import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_urj9GAxx5dkR86xc7lJwNCHYYTGppgioMGB2yZOEpWj1xaxNhJ9c676rynGXhU5Z';

function fetchBreeds() {
  return axios.get('https://api.thecatapi.com/v1/breeds');
}

function fetchCatByBreed(breedId) {
  return axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
  );
}

export { fetchBreeds, fetchCatByBreed };
