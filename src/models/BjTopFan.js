// https://api.spooncast.net/ranks/fan/ // 명예의 전당 TOP FAN .results
// https://api.spooncast.net/ranks/livebj/ // 명예의 전당 인기 LIVE BJ .results
// https://api.spooncast.net/ranks/castbj/ // 인기 cast BJ .results
// https://api.spooncast.net/ranks/cast/ // BEST CAST -> .next 다음 커서 .results 목록

const mongoose = require('mongoose');

const { Schema } = mongoose;

const BjTopFan = new Schema({
  ranks: [
    {
      BjId: Schema.Types.ObjectId, // Bjmodel에 먼저 유저데이터를 기록하고 그 id를 기록
      place: Number,
      score: Number,
      // 이하 데이터는 보기 편하라고 집어넣은 데이터들
      BjIdRaw: String, // spoon 전용 아이디
      tag: String, // not necessary, but useful for gathering info
      nickname: String, // not necessary, but useful for gathering info
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model('BjTopFan', BjTopFan);
