#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request(url, (err, _response, body) => {
  if (err) return console.error(err);

  const charactersArray = JSON.parse(body).characters;

  const fetchCharacter = (characterUrl) => {
    return new Promise((resolve, reject) => {
      request(characterUrl, (err, _response, body) => {
        if (err) return reject(err);
        console.log(JSON.parse(body).name);
        resolve();
      });
    });
  };

  (async () => {
    for (const character of charactersArray) {
      await fetchCharacter(character);
    }
  })().catch(console.error);
});
