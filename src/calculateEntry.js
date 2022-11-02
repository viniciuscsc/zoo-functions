const data = require('../data/zoo_data');

const { prices } = data;

const countEntrants = (array) => {
  const visitors = {};
  let children = 0;
  let adults = 0;
  let seniors = 0;
  array.forEach((visitor) => {
    if (visitor.age < 18) children += 1;
    if (visitor.age >= 18 && visitor.age < 50) adults += 1;
    if (visitor.age >= 50) seniors += 1;
  });
  visitors.adult = adults;
  visitors.senior = seniors;
  visitors.child = children;
  return visitors;
};

const calculateEntry = (array) => {
  if (array === undefined || Object.keys(array).length === 0) {
    return 0;
  }
  const visitors = countEntrants(array);
  const adultTotal = prices.adult * visitors.adult;
  const seniorTotal = prices.senior * visitors.senior;
  const childTotal = prices.child * visitors.child;
  return adultTotal + seniorTotal + childTotal;
};

module.exports = { calculateEntry, countEntrants };
