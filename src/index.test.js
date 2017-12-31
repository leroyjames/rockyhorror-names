import {expect} from 'chai';
import rockyHorror from './index';

describe('rockyhorror-names', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(rockyHorror.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain `Dr. Frank-N-Furter - A Scientist`', function() {
      expect(rockyHorror.all).to.include('Dr. Frank-N-Furter - A Scientist');
    });
  });

  describe('random', function() {
    it('should return a random item from the rockyHorror.all', function() {
      var randomItem = rockyHorror.random();
      expect(rockyHorror.all).to.include(randomItem);
    });

    it('should return an array of random items if passed a number', function() {
      var randomItems = rockyHorror.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(rockyHorror.all).to.include(item);
      });
    });
  });
});
