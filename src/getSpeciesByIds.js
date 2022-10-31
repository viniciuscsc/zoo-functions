const data = require('../data/zoo_data');

const { species } = data;
// console.log(species);

// function getSpeciesByIds(ids) {
//   for (let i = 0; i < species.length; i += 1) {
//     if (ids === species[i].id) {
//       return species[i];
//     }
//   }
//   return 0;
// }

function getSpeciesByIds(...ids) {
  return species.find((specie) => {
    return ids === specie.id;
  })
}

console.log(getSpeciesByIds('e8481c1d-42ea-4610-8e11-1752cfc05a46'));

module.exports = getSpeciesByIds;
