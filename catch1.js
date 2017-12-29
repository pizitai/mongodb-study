var Promise = require('bluebird');

Promise.reject(Error('fail!'))
  .catch(function(e) {
    // fallback with "recover from failure"
    return Promise.resolve('success!'); // promise or value
  })
  .then(function(result) {
    console.log(result); // will print "success!"
  });