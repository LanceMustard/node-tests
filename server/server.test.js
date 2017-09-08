const request = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;

describe('Express', () => {
  describe('#helloWord', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          })
        })
        .end(done);
    });
  });

  describe('#users', () => {
    it('should return an array of users', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Lance Mustard',
            age: 41
          });
        })
        .end(done);
    });  
  });
  
});