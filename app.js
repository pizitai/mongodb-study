var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

function getPost(file) {
    return fs.readFileAsync(file, 'utf8').then(function (content) {
        return {
            excerpt: content.substr(0, 100)
        }
    });
}
let aa = getPost('./README.md')
console.log(aa)