var fs = require('fs');

var result = fs.writeFileSync('./2.txt','我们在星光')
console.log(result)

fs.writeFile('./2.txt','学习',function (err) {
    console.log(err);
})