const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  it('should return fizz-buzz for numbers divisible by both 3 and 5', function() {

    const normalCases = [
      {num: 15, expected: 'fizz-buzz'},
      {num: 30, expected: 'fizz-buzz'},
      {num: 45, expected: 'fizz-buzz'}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should return buzz for numbers divisible by 5 but not 3', function() {

    const normalCases = [
      {num: 10, expected: 'buzz'},
      {num: 25, expected: 'buzz'},
      {num: 60, expected: 'fizz-buzz'}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should return fizz for numbers divisible by 3 but not 5', function() {

    const normalCases = [
      {num: 9, expected: 'fizz'},
      {num: 24, expected: 'fizz'},
      {num: 60, expected: 'fizz-buzz'}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should return the arg number for numbers not divisible by 3 or 5', function() {

    const normalCases = [
      {num: 8, expected: 8},
      {num: 23, expected: 23},
      {num: 59, expected: 59}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });  

  it('should raise error if args not numbers', function() {

    const badInputs = [
      ['a', 1],
      ['1', 2],
      [2, false]
    ];

    badInputs.forEach(function(input) {
      expect(function() {
        adder(input[0], input[1]);
      }).to.throw(Error);
    });
  });
});