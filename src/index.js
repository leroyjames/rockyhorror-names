import uniqueRandomArray from 'unique-random-array';
import rockyHorrorNames from './rockyhorror-names.json';

const getRandomItem = uniqueRandomArray(rockyHorrorNames);

module.exports = {
  all: rockyHorrorNames,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    const randomItems = [];
    for (let i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
