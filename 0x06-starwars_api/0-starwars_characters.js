#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request(url, (err, body) => {
  if (err) return console.error(err);

  const charactersArray = JSON.parse(body).characters;

  // Define a function to fetch character names sequentially
  const fetchCharacter = (characterUrl) => {
    return new Promise((resolve, reject) => {
      request(characterUrl, (err, body) => {
        if (err) return reject(err);
        console.log(JSON.parse(body).name);
        resolve();
      });
    });
  };

  // Sequentially fetch each character's data
  (async () => {
    for (const character of charactersArray) {
      await fetchCharacter(character);
    }
  })().catch(console.error);
});
