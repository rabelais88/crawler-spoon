import { expect } from 'chai';
import mongoose from 'mongoose';
import MongoMemoryServer from 'mongodb-memory-server';
import Preserver from '../src/parse-preserver';
import fakeBjRank from '../test-data/fakeBjRank';
import Bj from '../src/models/Bj';
import BjRank from '../src/models/BjRank';

let mongoServer;
before(async () => {
  mongoServer = new MongoMemoryServer();
  const mongoUri = await mongoServer.getConnectionString();
  await mongoose.connect(mongoUri, { useNewUrlParser: true });
});

after(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('preserver tests', () => {
  it('BjRank testing', async () => {
    const isResolved = await Preserver.saveRankData(fakeBjRank.results);
    expect(isResolved).to.be.true;
    const firstBj = await Bj.findOne({ bjIdRaw: '3943979' });
    const lastBj = await Bj.findOne({ bjIdRaw: '2469082' });
    expect(firstBj).to.have.property('tag');
    expect(lastBj).to.have.property('nickname');
    const rank = await BjRank.find().sort({ created_at: -1 }).limit(1);
    expect(rank[0].rank).to.have.lengthOf('30');
  });
});
