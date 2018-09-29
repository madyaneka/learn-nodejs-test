const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  let res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
});

it('should async add two numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

it('should square number', () => {
  let res = utils.square(3, 3);

  expect(res).toBe(9).toBeA('number');
});

it('should async square a number', (done) => {
  utils.asyncSquare(5, (res) => {
    expect(res).toBe(25).toBeA('number');
    done();
  });
});

// should verify first and last names are set
// assert it includes firstName and lastName with proper values
it('should set firstName and lastName', () => {
  let user = {location: 'Kediri', age: 23};
  let res = utils.setName(user, 'Madyan Eka');

  expect(res).toInclude({
    firstName: 'Madyan',
    lastName: 'Eka'
  });
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(12);
//   // expect({name: 'madyan'}).toNotEqual({name: 'Madyan'});
//   // expect([2, 3, 4]).toExclude(5);
//   expect({
//     name: 'Madyan',
//     age: 23,
//     location: 'Kediri'
//   }).toExclude({
//     location: 'kediri'
//   });
// });
