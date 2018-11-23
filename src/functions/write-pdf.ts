var fs = require('fs');
var mkdirp = require('mkdirp');
var getDirName = require('path').dirname;

import * as puppeteer from 'puppeteer';

/**
 * This function writes content to a file under the given path and filename.
 * @param path, path and filename of the file which should be written
 * @param contents, content of the file
 * @param cb 
 */
export function writePdf(path): void {
    mkdirp(getDirName(path), function (err) {
        // if (err) return cb(err);
        (async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto('https://news.ycombinator.com', { waitUntil: 'networkidle2' });
            await page.pdf({ path: path, format: 'A4' });
            await browser.close();
        })();
    });
}