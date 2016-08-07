const fs = require('fs');
const EE = require('events');

const readFiles = function(files, callback) {
  var arr = [];
  const ee = new EE();
  ee.on('filesRead', function(data){
    if(data) arr.unshift(data.toString());
    if(files.length == 0) {
      return callback(null, arr);
    }

    fs.readFile(files.pop(), function(err, data){
      if(err) return console.log(err);
      ee.emit('filesRead', data);
    });
  });
  ee.emit('filesRead');
};

module.exports = readFiles;
