const data = require('../data/zoo_data');

const { species, employees } = data;

const getOldestFromFirstSpecies = (id) => {
  const firstSpecie = employees.find((employee) => employee.id === id).responsibleFor[0];

  const residentsFromFirstSpecie = species.find((specie) => specie.id === firstSpecie).residents;

  let oldestResident = '';
  let ageOfOldestResident = 0;
  residentsFromFirstSpecie.forEach((resident) => {
    if (resident.age > ageOfOldestResident) {
      oldestResident = resident;
      ageOfOldestResident = resident.age;
    }
  });
  const infosOldestResident = [oldestResident.name, oldestResident.sex, oldestResident.age];
  return infosOldestResident;
};

module.exports = getOldestFromFirstSpecies;
