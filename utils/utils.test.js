const expect = require('expect');
const utils = require('./utils.js');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(11, 22);
      expect(res).toBe(33).toBeA('number');
      // test manually
      // if (res != 33) {
      //   throw new Error(`Expected 33, but got ${res}`);
      // }
    });
    
    // async testing
    it('should async add two numbers', (done) => {
      utils.asyncAdd(7, 4, (res) => {
        expect(res).toBe(11).toBeA('number');
        done();
      });
    });
  });

  describe('#square', () => {
    it('should async square the number', (done) => {
      utils.asyncSquare(7, (res) => {
        expect(res).toBe(49).toBeA('number');
        done();
      });
    });
    
    it('should square the numbers', () => {
      var res = utils.square(4);
      expect(res).toBe(16).toBeA('number');
    });  
  });

  describe('#others', () => {
    it('should expect some values', () => {
      expect(12).toNotBe(11);
      expect({name: 'Andrew'}).toNotEqual({name: 'andrew'});
      expect([1, 2, 3, 4]).toExclude(5);
      expect({
        name: 'Lance',
        age: 41,
        location: 'Perth'
      }).toInclude({
        age: 41
      })
    });
    
    it('should set firstName and lastName', () => {
      var user = utils.setName({}, 'Lance Mustard');
      expect(user).toInclude({
        firstName: 'Lance',
        lastName: 'Mustard'
      });
    });      
  });
  
});

