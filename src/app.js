// https://api.spooncast.net/lives/popular/?is_adult=false // 지금 핫한 라이브 .results 목록 .next 다음 커서 // 일단 사용 안함
// https://api.spooncast.net/casts/main/?page_size=20 // 캐스트 .popular, .recent -> .next 다음 커서 .results 목록 // 일단 사용 안함
// https://api.spooncast.net/ranks/fan/ // 명예의 전당 TOP FAN .results
// https://api.spooncast.net/ranks/livebj/ // 명예의 전당 인기 LIVE BJ .results
// https://api.spooncast.net/ranks/castbj/ // 인기 cast BJ .results
// https://api.spooncast.net/ranks/cast/ // BEST CAST -> .next 다음 커서 .results 목록
import dotenv from 'dotenv';
import Crawler from './crawler';
import Preserver from './parse-preserver';

let ENV = { // default settings
  ACTIONS_PER_TASK: 10,
  MAX_TASK: 0,
  DELAY_FOR_EACH_CRAWL: 1000,
};
ENV = { ...ENV, ...dotenv.config() };
if (!ENV.MONGO_URI) throw Error('missing mongo uri setting. please create .env');
// MONGO_URI= # 데이터를 저장할 몽고dburi
// ACTIONS_PER_TASK=10 # 한번 크롤링시 가져올 갯수
// MAX_TASK=0 # 최대 크롤링 한도 - 0은 없음
// DELAY_FOR_EACH_CRAWL=1000 # 매 크롤링마다 딜레이

const crawler = new Crawler();
const preserver = new Preserver(ENV.MONGO_URI);
(async () => {
  await preserver.connect();
  const rankData = await crawler.crawl('https://api.spooncast.net/ranks/fan/');
  console.log(rankData);
  await Preserver.saveRankData(rankData);
})();
