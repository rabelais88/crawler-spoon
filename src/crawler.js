// main crawler

const request = require('request-promise');

class Crawler {
  constructor(extraSettings = {}) {
    this.req = request.defaults({
      gzip: true,
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36', // faking user agent
      // proxy: 'proxyurl'
      ...extraSettings,
    });
  }

  async crawl(...urls) {
    if (urls.length === 0) throw Error('url was not given!');
    if (typeof urls[0] !== 'string' || urls[0] === '') throw Error('wrong url was given!');
    const promisedCrawls = urls.map(url => this.req(url));
    const results = await Promise.all(promisedCrawls);
    return results;
  }
}

module.exports = Crawler;
