'use strict';
//function that takes 1 parameter
const name=prompt('Enter your name');
function greetUser(name){
    return `Привіт, ${name}`;
}
//output line
alert(greetUser(name));