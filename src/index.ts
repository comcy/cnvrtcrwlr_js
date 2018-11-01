#!/usr/bin/env node

import {readFile, writeFile} from './functions';

var argv = require('minimist')(process.argv.slice(2));
var showdown = require('showdown');

// TODO: Do some hints for app arguments

const input: string = argv.i; // -i: input parameter
const output: string = argv.o; // -o: output parameter
const converter = new showdown.Converter;

const inputMarkdown = readFile(input, 'utf-8');
const outputHtml = converter.makeHtml(inputMarkdown);
writeFile(output, outputHtml, 'utf-8');
