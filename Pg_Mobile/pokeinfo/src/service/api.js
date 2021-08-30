import axios from "axios";

const FEEDS_ADDRESS = "http://172.29.1.1:5000";
const IMAGES_ADDRESS = "http://172.29.1.5:80/";

const api = axios.create({
  baseURL: FEEDS_ADDRESS,
});

export const getFeeds = async (page) => {
  let promise = null;
  console.log(`${FEEDS_ADDRESS}/pokemons/${page}`);

  try {
    response = await fetch(`${FEEDS_ADDRESS}/pokemons/${page}`, {
      method: "GET",
    });

    if (response.ok) {
      promise = Promise.resolve(response.json());
    } else {
      promise = Promise.reject(response);
    }
  } catch (error) {
    promise = Promise.reject(error);
  }

  return promise;
};

export const getPokemon = async (pokemon_id) => {
  let promise = null;
  console.log(`${FEEDS_ADDRESS}/pokemons/${page}`);

  try {
    response = await fetch(`${FEEDS_ADDRESS}/pokemon/${pokemon_id}`, {
      method: "GET",
    });

    if (response.ok) {
      promise = Promise.resolve(response.json());
    } else {
      promise = Promise.reject(response);
    }
  } catch (error) {
    promise = Promise.reject(error);
  }

  return promise;
};

export const getImages = (pokemon, image) => {
  const imageURL = `${IMAGES_ADDRESS}/${pokemon}/sprites/${image}.png`;

  return imageURL;
};

export default api;
