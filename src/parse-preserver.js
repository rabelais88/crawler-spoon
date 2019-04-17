// parser & preserver
import mongoose from 'mongoose';
import Bj from './models/Bj';
import BjRank from './models/BjRank';

class Preserver {
  constructor(_mongoose) {
    if (_mongoose) this.$mongoose = _mongoose;
    else this.$mongoose = mongoose;
  }

  async connect(mongoUri) {
    await this.$mongoose.connect(mongoUri);
  }

  static async saveRankData(rankData) {
    // https://api.spooncast.net/ranks/fan/ .results
    if (!Array.isArray(rankData)) throw Error('wrong data type -- must provide array');
    const newBjRank = [];
    // eslint-disable-next-line
    for(let eachRank of rankData) {
      let currentBj = await Bj.findOne({ bjIdRaw: eachRank.author.id });
      if (!currentBj) {
        currentBj = await Bj.create({ ...eachRank.author, bjIdRaw: eachRank.author.id });
      }
      newBjRank.push({
        bj: currentBj,
        score: eachRank.score,
        following_count: eachRank.author.following_count,
        follower_count: eachRank.author.follower_count,
      });
    }
    await BjRank.create({ rank: newBjRank });
    return true;
  }
}

export default Preserver;
