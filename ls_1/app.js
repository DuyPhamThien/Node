var  ok = require('./ok');
 var ok1 = new ok('red');

 
         /*dong bo */
// var fs = require('fs');         
// var text = fs.readFileSync('./song.txt', {encoding : 'utf8' });
// console.log(text);
// fs.writeFileSync('./song.txt' , 'okkkk');
  
       /*bat dong  bo */
//var fs = require('fs');   
// console.log('start');
// var text = fs.readFile('./song.txt' ,{encoding : 'utf8'} ,  function( err , data ){
//     console.log(data)
// })
// console.log('end');

       
var fs = require('fs');
function readFilePromise(path){
    return new Promise(function(resolve , reject){
        fs.readFile(path,{encoding : 'utf8'} , function(err , data){
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        });
    });
}
         /*promise */
// readFilePromise('song.txt')
//     .then (function(song){
//          console.log(song);
//         return readFilePromise('song1.txt');      
//     })
//     .then (function(song1){
//         console.log(song1);
//         return readFilePromise('song2.txt');
//     })    
//     .then (function(song2){
//         console.log(song2);
//     })  
//     .catch(function(error){
//         console.log(error);
//     });


         /*await*/
async function readFileasync(){
    var song = await readFilePromise('./song.txt');
    var song1 = await readFilePromise('./song1.txt');
    var song2 = await readFilePromise('./song2.txt');
    //console.log(song , song1 , song2);
    return [song,song1,song2];
}
readFileasync().then(function(data){
    console.log(data);
})
readFileasync().catch(function(error){
    console.log(error);
})

 