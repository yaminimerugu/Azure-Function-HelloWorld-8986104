const chai = require('chai');
const expect = chai.expect;
const helloWorldFunction = require('../index'); // Adjust path if needed

describe('Azure Hello World Function', () => {
  it('should return a response object', async () => {
    const context = {};
    const req = {};

    await helloWorldFunction(context, req);

    expect(context).to.have.property('res');
    expect(context.res).to.be.an('object');
  });

  it('should return status 200', async () => {
    const context = {};
    const req = {};

    await helloWorldFunction(context, req);

    expect(context.res.status).to.equal(200);
  });

  it('should return Hello, World! in body', async () => {
    const context = {};
    const req = {};

    await helloWorldFunction(context, req);

    expect(context.res.body).to.equal('Hello, World!');
  });
});
