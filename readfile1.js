var fs = require('fs');

//console.log(fs)
//var result = fs.readFileSync('./1.txt',{encoding:'utf-8'});
var result = fs.readFileSync('./1.txt','utf8');
//console.log(result);

fs.readFile('./1.txt','utf8',function (err,data) {
    console.log(data);
})