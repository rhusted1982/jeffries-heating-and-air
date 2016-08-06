import fs from 'fs';
import cheerio from 'cheerio';

fs.readFile('src/index.html', 'utf8', (error, markup) => {
    const $ = cheerio.load(markup);
    $('head').prepend('<link rel="stylesheet" href="app.css">');
    fs.writeFile('dist/index.html', $.html(), 'utf8');
});