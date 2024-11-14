#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
if (!movieId) {
  console.error('Missing movie ID');
  process.exit(1);
}

const url = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request(url, (err, _, body) => {
  if (err) return console.error(err);

  const charactersArray = JSON.parse(body).characters;

  // Function to fetch character names sequentially
  const fetchCharacter = (characterUrl) => {
    return new Promise((resolve, reject) => {
      request(characterUrl, (err, _, body) => {
        if (err) return reject(err);
        console.log(JSON.parse(body).name);
        resolve();
      });
    });
  };

  // Sequentially fetch each character's data
  (async () => {
    try {
      for (const character of charactersArray) {
        await fetchCharacter(character);
      }
    } catch (error) {
      console.error(error);
    }
  })();
});
