const data = require('../data/zoo_data');

const { species, hours } = data;

const weekDays = {
  Tuesday: {},
  Wednesday: {},
  Thursday: {},
  Friday: {},
  Saturday: {},
  Sunday: {},
  Monday: {},
};

const animalSearch = (animal) => species.find((specie) => specie.name === animal).availability;

const displayScheduleOfTheWeek = () => {
  Object.keys(weekDays).forEach((day) => {
    if (day !== 'Monday') {
      weekDays[day].officeHour = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
      weekDays[day].exhibition = species
        .filter((specie) => specie.availability.includes(day))
        .map((specie) => specie.name);
    } else {
      weekDays[day].officeHour = 'CLOSED';
      weekDays[day].exhibition = 'The zoo will be closed!';
    }
  });
  return weekDays;
};

const daySearch = (day) => {
  const formattedDay = {};
  formattedDay[day] = displayScheduleOfTheWeek()[day];
  return formattedDay;
};

const getSchedule = (scheduleTarget) => {
  const animals = [];
  species.forEach((specie) => {
    animals.push(specie.name);
  });
  if (animals.includes(scheduleTarget)) {
    return animalSearch(scheduleTarget);
  }
  const arrayWeekDays = Object.keys(displayScheduleOfTheWeek());
  if (arrayWeekDays.includes(scheduleTarget)) {
    return daySearch(scheduleTarget);
  }
  return displayScheduleOfTheWeek();
};

console.log(getSchedule('Tuesday'));

module.exports = getSchedule;
