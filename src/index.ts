#!/usr/bin/env node

import { readFile, writeHtml, generatePdf } from './functions';

var argv = require('minimist')(process.argv.slice(2));
var showdown = require('showdown');

// TODO: Do some hints for app arguments

const input: string = argv.i; // -i: input parameter 
const output: string = argv.o; // -o: output parameter
const type: string = argv.t; // -t: file type parameter

const converter = new showdown.Converter;

if (type === 'html' || type === '') {
    const inputMarkdown = readFile(input, 'utf-8');
    const outputHtml = converter.makeHtml(inputMarkdown);
    writeHtml(output, outputHtml, 'utf-8');
}

if (type === 'pdf') {
    const outputPdf = output;
    const inputHtml = readFile(input, 'utf-8');
    generatePdf(inputHtml, outputPdf);
}

