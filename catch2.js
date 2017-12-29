var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

fs.readFileAsync('./aa.js')
.then(()=>{
    console.log('successs!')
})
.catch({code: 'ENOENT'}, function(e) {
    console.log("file not found: " + e.path);
});