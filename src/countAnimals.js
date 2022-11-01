const data = require('../data/zoo_data');

const { species } = data;

const countAnimals = (animal) => {
  if (animal === undefined) {
    const animals = {};
    species.forEach((specie) => {
      animals[`${specie.name}`] = specie.residents.length;
    });
    return animals;
  }
  const reducedAnimal = Object.entries(animal).reduce((acc, curr) => acc.concat(curr));
  if (reducedAnimal.length === 2) {
    return species.find((specie) => specie.name === reducedAnimal[1]).residents.length;
  }
  if (reducedAnimal.length === 4) {
    return species.find((specie) => specie.name === reducedAnimal[1]).residents
      .filter((resident) => resident.sex === reducedAnimal[3]).length;
  }
};

module.exports = countAnimals;
