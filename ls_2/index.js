var fs = require('fs');
var ok = fs.readFileSync('./data.json',{encoding : 'utf8'});
var ok1 =[];
ok1 = JSON.parse(ok);
ok1.push({name : 'ok' , age : 20});
console.log(ok1);
var ok2 = JSON.stringify(ok1);
console.log(ok2);
fs.writeFileSync('./data.json',ok2,{encoding : 'utf8'});



