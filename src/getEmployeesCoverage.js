const data = require('../data/zoo_data');

const { species, employees } = data;
const errorMessage = 'Informações inválidas';

const getSpecieByArrayId = (speciesIds) => {
  const arrayOfSpeciesNames = [];
  speciesIds.forEach((specieId) => {
    arrayOfSpeciesNames.push(species.find((specie) => specie.id === specieId).name);
  });
  return arrayOfSpeciesNames;
};

const getLocationByArrayId = (speciesIds) => {
  const arrayOfSpeciesLocations = [];
  speciesIds.forEach((specieId) => {
    arrayOfSpeciesLocations.push(species.find((specie) => specie.id === specieId).location);
  });
  return arrayOfSpeciesLocations;
};

const searchByName = (firstOrLastName) => {
  const employeeInfo = employees.find((employee) => employee.firstName === firstOrLastName.name
   || employee.lastName === firstOrLastName.name);
  if (employeeInfo === undefined) {
    throw new Error(errorMessage);
  }
  const formattedEmployeeInfo = {
    id: employeeInfo.id,
    fullName: `${employeeInfo.firstName} ${employeeInfo.lastName}`,
    species: getSpecieByArrayId(employeeInfo.responsibleFor),
    locations: getLocationByArrayId(employeeInfo.responsibleFor),
  };
  return formattedEmployeeInfo;
};

const searchById = (idNumber) => {
  const employeeInfo = employees.find((employee) => employee.id === idNumber.id);
  if (employeeInfo === undefined) {
    throw new Error(errorMessage);
  }
  const formattedEmployeeInfo = {
    id: employeeInfo.id,
    fullName: `${employeeInfo.firstName} ${employeeInfo.lastName}`,
    species: getSpecieByArrayId(employeeInfo.responsibleFor),
    locations: getLocationByArrayId(employeeInfo.responsibleFor),
  };
  return formattedEmployeeInfo;
};

const displaysInfoAllEmployees = () => {
  const employeesInfo = [];
  employees.forEach((employee) => {
    employeesInfo.push(searchByName({ name: employee.firstName }));
  });
  return employeesInfo;
};

const getEmployeesCoverage = (dataForSearch) => {
  if (dataForSearch === undefined) {
    return displaysInfoAllEmployees();
  }
  if (Object.keys(dataForSearch)[0] === 'name') {
    return searchByName(dataForSearch);
  }
  if (Object.keys(dataForSearch)[0] === 'id') {
    return searchById(dataForSearch);
  }
  throw new Error(errorMessage);
};

module.exports = getEmployeesCoverage;
