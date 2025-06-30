'use strict';
function demo() {
    for(let i = 0; i < 1; i++) {
var variableVar=`var`; //функціональна область видимості
let variableLet=`let`; // блочна область видимості
const variableConst=`const`;//блочна область видимості
console.log(`У циклі`);
console.log(variableVar); //доступно
console.log(variableLet); //доступно
console.log(variableConst); //доступно
        }
    console.log(`Поза циклом`);
    console.log(variableVar); // доступна тут, бо var має функціональну область видимості
    console.log(variableLet); // is not defined, бо вийшла з області видимості
    console.log(variableConst); // is not defined, бо вийшла з області видимості
}
demo();