const NodeEnvironment = require('jest-environment-node');
const { default: MongoMemoryServer } = require('mongodb-memory-server');

class IntegrationEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
    this.mongod = new MongoMemoryServer({
      binary: {
        version: '4.0.1',
      },
      autoStart: false,
    });
  }

  async setup() {
    await super.setup();

    await this.mongod.start();
    this.global.__MONGO_URI__ = await this.mongod.getConnectionString();
  }

  async teardown() {
    await super.teardown();
    await this.mongod.stop();
  }
}

module.exports = IntegrationEnvironment;
