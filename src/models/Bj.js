import mongoose from 'mongoose';

const { Schema } = mongoose;

const Bj = new Schema({
  // 실제 데이터상에는 그냥 id로 되어있으나, 몽고 db의 _id와 혼선을 피하기 위하여 이름을 바꿈
  bjIdRaw: { type: String, required: true },
  nickname: { type: String, required: true },
  profile_url: { type: String, required: true },
  description: String,
  tag: String,
  gender: Number,
  date_joined: Date,
  country: String,
  is_active: Boolean,
  is_staff: Boolean,
}, { timestamps: true });

export default mongoose.model('Bj', Bj);
