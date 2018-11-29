import createModels from '../../src/models';

export const setupMongoose = async mongoose => {
	const mongooseInstance = new mongoose.Mongoose();

	createModels(mongooseInstance);

	await mongooseInstance.connect(
		global.__MONGO_URI__,
		{
			autoReconnect: true,
			reconnectTries: Number.MAX_VALUE,
			reconnectInterval: 1000,
			useNewUrlParser: true,
		},
	);

	return mongooseInstance;
};

export const dropCollections = async mongoose => {
	const collections = await mongoose.connection.db.collections();

	for (const collection of collections) {
		// eslint-disable-next-line no-await-in-loop
		await collection.deleteOne();
	}
};
