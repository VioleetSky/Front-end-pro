'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
//function that returns a string of random characters from the set characters
function generateKey(counter, line){
    const arr=line.split(''); //converting a string to an array
    let result='';
    for(let i=0;i<counter;i++){
    result +=`${arr[Math.floor(Math.random()*arr.length)]}`;
    }
    return result;
}
const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i
