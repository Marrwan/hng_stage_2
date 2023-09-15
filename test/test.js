const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app'); 
const should = chai.should();

chai.use(chaiHttp);

describe('Person API', () => {
  // Define a variable to store the ID of a created person for testing
  let createdPersonId;

  // Test the CREATE endpoint
  describe('/POST /api', () => {
    it('it should create a new person', (done) => {
      const newPerson = {
        name: 'John Doe',
        age: 30,
      };

      chai.request(server)
        .post('/api')
        .send(newPerson)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('name').eql('John Doe');
          res.body.should.have.property('age').eql(30);
          createdPersonId = res.body._id; // Store the ID for later use
          done();
        });
    });
  });

  // Test the READ endpoint
  describe('/GET /api/:id', () => {
    it('it should get a person by ID', (done) => {
      chai.request(server)
        .get(`/api/${createdPersonId}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('name').eql('John Doe');
          res.body.should.have.property('age').eql(30);
          done();
        });
    });
  });

  // Test the UPDATE endpoint
  describe('/PUT /api/:id', () => {
    it('it should update a person by ID', (done) => {
      const updatedPerson = {
        name: 'Updated Name',
        age: 35,
      };

      chai.request(server)
        .put(`/api/${createdPersonId}`)
        .send(updatedPerson)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('name').eql('Updated Name');
          res.body.should.have.property('age').eql(35);
          done();
        });
    });
  });

  // Test the DELETE endpoint
  describe('/DELETE /api/:id', () => {
    it('it should delete a person by ID', (done) => {
      chai.request(server)
        .delete(`/api/${createdPersonId}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('name').eql('Updated Name');
          res.body.should.have.property('age').eql(35);
          done();
        });
    });
  });

  after((done) => {
    chai.request(server)
      .delete(`/api/${createdPersonId}`)
      .end(() => {
        done();
      });
  });
});
