#!/usr/bin/node

const request = require('request-promise');

const movieId = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${movieId}`;

(async () => {
  try {
    const filmData = await request({ uri: url, json: true });
    const charactersArray = filmData.characters;

    for (const character of charactersArray) {
      const characterData = await request({ uri: character, json: true });
      console.log(characterData.name);
    }
  } catch (error) {
    console.error(error);
  }
})();

