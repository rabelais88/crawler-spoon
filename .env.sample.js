module.exports = {
  mongoUri: '', // 데이터를 저장할 uri
  actionsPerTask: 10, // 한번 크롤링시 가져올 갯수
  maxTask: 0, // 최대 크롤링 한도 - 0은 없음
  delay: 1000, // 매 크롤링마다 걸리는 시간
}