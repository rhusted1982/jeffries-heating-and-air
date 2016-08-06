import fs from 'fs';
import cheerio from 'cheerio';

/*eslint-disable no-console */

fs.readFile('src/index.html', 'utf8', (error, markup) => {
    if (error) {
        return console.log(error);
    }
    const $ = cheerio.load(markup);
    fs.writeFile('dist/index.html', $.html(), 'utf8', function (error) {
        if (error) {
            return console.log(error);
        }
    });
});