var fs = require('fs');

/**
 * This function reads in a given file by the given path.  
 * @param path, path to and name of the markdown file 
 * @param cb 
 */
export function readFile(path, cb): string {
    return fs.readFileSync(path, cb, function (err) {
        if (err) {
            return console.log(err);
        }
    });
}