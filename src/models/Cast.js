const mongoose = require('mongoose');

const { Schema } = mongoose;

const Cast = new Schema({
  BjIdRaw: {
    type: String,
    required: true,
  }, // 실제 데이터상에는 그냥 id로 되어있으나, 몽고 db의 _id와 혼선을 피하기 위하여 이름을 바꿈

}, { timestamps: true });

module.exports = mongoose.model('Cast', Cast);
