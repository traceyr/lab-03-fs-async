const expect = require('chai').expect;
const readFile = require('../lib/readFiles');

var files = ['test/test1.txt', 'test/test2.txt', 'test/test3.txt'];

describe('checking the readFiles is working', function() {
  it('the files should come out in the right order', function(done) {
    readFile(files, function(err, data){
      console.log(data);
      expect(data).to.eql(['this is test 1\n', 'this is test 2\n', 'this is test 3\n' ]);
      done();
    });
  });
});
