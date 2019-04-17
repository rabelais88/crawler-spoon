import Crawler from './crawler';
import Preserver from './parse-preserver';

const crawler = new Crawler();
const preserver = new Preserver();
(async () => {
  const rankData = await crawler.crawl('https://api.spooncast.net/ranks/fan/');
  console.log(rankData);
  // await Preserver.saveRankData(rankData);
})();
