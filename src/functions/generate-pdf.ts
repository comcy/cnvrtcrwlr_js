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
export function generatePdf(inputHtml, outputPdf): void {
    mkdirp(getDirName(outputPdf), function (err) {
        // if (err) return cb(err);
        // (async () => {
        //     const browser = await puppeteer.launch();
        //     const page = await browser.newPage();
        //     await page.goto(input, { waitUntil: 'networkidle2' });
        //     await page.pdf({ path: path, format: 'A4' });
        //     await browser.close();
        // })();

        (async () => {

            let input = process.argv[2];
            let output = process.argv[3];
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.setContent(inputHtml, { waitUntil: 'networkidle2' })
            await page.pdf(
                {
                    path: outputPdf,
                    format: 'A4',
                    printBackground: true,
                    displayHeaderFooter: true,
                    margin: { left: '2cm', top: '3cm', right: '1cm', bottom: '2.5cm' }
                });

            browser.close();
        })();
    });
}