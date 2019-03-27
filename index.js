// https://api.spooncast.net/lives/popular/?is_adult=false // 지금 핫한 라이브 .results 목록 .next 다음 커서
// https://api.spooncast.net/casts/main/?page_size=20 // 캐스트 .popular, .recent -> .next 다음 커서 .results 목록
// https://api.spooncast.net/ranks/fan/ // 명예의 전당 TOP FAN .results
// https://api.spooncast.net/ranks/livebj/ // 명예의 전당 인기 LIVE BJ .results
// https://api.spooncast.net/ranks/castbj/ // 인기 cast BJ .results
// https://api.spooncast.net/ranks/cast/ // BEST CAST -> .next 다음 커서 .results 목록

const settings = require('./.env');

if (!settings) throw Error('setting file does not exist, please create your own ".env.js" file using ".env.sample.js" file');

const Crawler = require('./src/crawler');

const crawler = new Crawler();
const URL = 'https://api.spooncast.net/lives/main/?page_size=13&is_adult=false';
crawler.crawl(URL).then(crawled => console.log(crawled));
