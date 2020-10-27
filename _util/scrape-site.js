const scrape = require('website-scraper');
const ScrapeThrottler = require('./ScrapeThrottler');

const options = {
  urls: process.argv.slice(2),
  directory: '../reference',
  filenameGenerator: 'bySiteStructure',
  plugins: [
    new ScrapeThrottler(
        150,   // Minimum request time, ms
        3000,  // Maximum request time, ms
        3     // Concurrent requests
    )
]
};
 
// with async/await
const result = await scrape(options);
 
// with promise
// scrape(options).then((result) => {});