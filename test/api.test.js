import mongoose from 'mongoose';
import createServer from '../src/http-server';

import { setupMongoose, dropCollections } from './helpers';

const logger = { info() {}, warn() {}, error() {} };

describe('Api.getPage', function() {
	beforeAll(async () => {
		this.mongoose = await setupMongoose(mongoose);
		this.server = createServer(this.mongoose).listen();
	});

	afterEach(async () => {
		await dropCollections(this.mongoose);
		this.server.close();
	});

	afterAll(async () => {
		await this.mongoose.disconnect();
	});

	it('api test', async () => {
		expect(true).toEqual(true);
	});
});
