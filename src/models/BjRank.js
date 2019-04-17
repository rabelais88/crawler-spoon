import mongoose from 'mongoose';

const { Schema } = mongoose;

const BjRank = new Schema({
  rank: [
    // 실제 데이터상에는 그냥 id로 되어있으나, 몽고 db의 _id와 혼선을 피하기 위하여 이름을 바꿈
    {
      bj: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Bj', // refer to ._id of Item Model
      },
      score: { type: Number, required: true },
      following_count: { type: Number, required: true },
      follower_count: { type: Number, required: true },
    },
  ],
}, { timestamps: true });

export default mongoose.model('BjRank', BjRank);
