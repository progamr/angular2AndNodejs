var fs = require('fs');
console.log('start program');
fs.readFile('content.txt', 'utf8', function(err, contents) {
    console.log(contents);
});
console.log('i handled some other processes while waiting for I/O :\'DD');