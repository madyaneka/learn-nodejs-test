const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('App', () => {
  let db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db); // rewire adds a special setter and getter to modules so you can modify their behaviour for better unit testing.

  it('should call the spy correctly', () => {
    let spy = expect.createSpy();
    spy('Madyan', 23);
    expect(spy).toHaveBeenCalledWith('Madyan', 23);
  });

  it('should call saveUser with user object', () => {
    let email = 'madyaneka@example.com';
    let password = '123abc';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });
});
