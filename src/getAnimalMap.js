const { species } = require('../data/zoo_data');

const locations = ['NE', 'NW', 'SE', 'SW'];

const filterNotIncludeNames = () => {
  const animalsByLocation = {};
  locations.forEach((location) => {
    animalsByLocation[location] = species.filter((specie) => {
      return specie.location === location;
    }).map((specie) => specie.name);
  });
  return animalsByLocation;
};

const filterSex = (optionsValues, specie) => {
  if (optionsValues.includes('female')) {
    return specie.residents.filter((resident) => {
      return resident.sex === 'female';
    }).map((resident) => resident.name);
  }
  return specie.residents
    .filter((resident) => resident.sex === 'male')
    .map((resident) => resident.name);
};

const getResidentsByLocations = (location, options) => {
  const residentsByLocation = [];
  const optionsKeys = Object.keys(options);
  const optionsValues = Object.values(options);
  species.filter((specie) => specie.location === location).forEach((specie) => {
    const residents = {};
    let specieResidents = specie.residents.map((resident) => resident.name);
    if (optionsValues.includes('female') || optionsValues.includes('male')) {
      specieResidents = filterSex(optionsValues, specie);
    }
    if (optionsKeys.includes('sorted')) {
      specieResidents.sort();
    }
    residents[specie.name] = specieResidents;
    residentsByLocation.push(residents);
  });
  return residentsByLocation;
};

const filterIncludeNames = (options) => {
  const residentsByLocation = {};
  locations.forEach((location) => {
    residentsByLocation[location] = getResidentsByLocations(location, options);
  });
  return residentsByLocation;
};

const getAnimalMap = (options) => {
  if (options === undefined || !Object.keys(options).includes('includeNames')) {
    return filterNotIncludeNames();
  }
  return filterIncludeNames(options);
};

module.exports = getAnimalMap;
