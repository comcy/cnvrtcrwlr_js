var fs = require('fs');
var mkdirp = require('mkdirp');
var getDirName = require('path').dirname;

/**
 * This function writes content to a file under the given path and filename.
 * @param path, path and filename of the file which should be written
 * @param contents, content of the file
 * @param cb 
 */
export function writeHtml(path, contents, cb): void {
    mkdirp(getDirName(path), function (err) {
        if (err) return cb(err);
        fs.writeFile(path, contents, cb, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    });
}