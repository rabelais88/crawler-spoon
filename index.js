// https://api.spooncast.net/lives/popular/?is_adult=false // 지금 핫한 라이브 .results 목록 .next 다음 커서 // 일단 사용 안함
// https://api.spooncast.net/casts/main/?page_size=20 // 캐스트 .popular, .recent -> .next 다음 커서 .results 목록 // 일단 사용 안함
// https://api.spooncast.net/ranks/fan/ // 명예의 전당 TOP FAN .results
// https://api.spooncast.net/ranks/livebj/ // 명예의 전당 인기 LIVE BJ .results
// https://api.spooncast.net/ranks/castbj/ // 인기 cast BJ .results
// https://api.spooncast.net/ranks/cast/ // BEST CAST -> .next 다음 커서 .results 목록

const settings = require('./.env');

if (!settings) throw Error('setting file does not exist, please create your own ".env.js" file using ".env.sample.js" file');

const Crawler = require('./src/crawler');

const crawler = new Crawler();
const URL = 'https://api.spooncast.net/lives/popular/?is_adult=false';
crawler.crawl(URL).then(crawled => console.log(crawled));

// settings
// mongoUri: '', // 데이터를 저장할 uri
// actionsPerTask: 10, // 한번 크롤링시 가져올 갯수
// maxTask: 0, // 최대 크롤링 한도 - 0은 없음
// delay: 1000, // 매 크롤링마다 걸리는 시간
(async () => {
  
})();