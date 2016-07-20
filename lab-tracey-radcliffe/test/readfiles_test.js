const expect = require('chai').expect;
const readFile = require('../lib/readFiles');
const readFilescli = require('../bin/readFilesCLI');

var files = ['test/test1.txt', 'test/test2.txt', 'test/test3.txt'];

describe('checking the readFiles is working', () => {
  it('the files should come out in the right order', function(done) {
    readFile(files, function(err, data){
      console.log(data);
      expect(data).to.eql(['this is test 1\n', 'this is test 2\n', 'this is test 3\n' ]);
      done();
    });
  });
  it('checks to make sure in output order is the same as the input order', () => {

  });
});

describe('read cli', () =>{
  before(()=>{
    this.argv_backup = process.argv;
    process.argv = [null, null, 'test'];
  });

  after(() => {
    process.argv = this.argv_backup;
  });

  it('shopuld read from process.argv', () => {
    var called = false;
    var testStream = {
      write: function(input){
        expect(input).to.eql(readFile('test'));
      }
    };
    readFilescli(undefined, testStream);
  });
});
