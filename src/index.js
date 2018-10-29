#!/usr/bin/env node

var showdown  = require('showdown'),
    converter = new showdown.Converter(),
    text      = '# hello, markdown!',
    html      = converter.makeHtml(text);


// TODO: added test for converted print out 
console.log(html);

