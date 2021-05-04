const axios = require('axios');

const BASE_URL = 'https://swapi.dev/api/people/';

export const getPeople = async () => {
  const response = await axios.get(BASE_URL);
  return response.data.results;
};

export const getMorePeople = async (setPage) => {
  const response = await axios.get(BASE_URL, {
    params: {
      page: setPage,
    },
  });
  return response.data.results;
};
