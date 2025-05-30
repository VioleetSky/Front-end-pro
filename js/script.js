'use strict';

const name=prompt(`What is your name?`);
const age=Number(prompt(`What is your age?`));
const consert=confirm(`Do you agree to participate?`);
const userId=568542285n;
let bonusCode=null;
let secondName=undefined;

let consertStr=null;
if(consert){
consertStr=`Участь погоджено`;
}
else{
    consertStr=`Відмовився`;
}

alert(`Привіт, ${name}! \nТвій вік: ${age} \nТвій статус: ${consertStr}`);
console.log(`Ім'я: `, name, typeof name);
console.log(`Вік: `, age, typeof age);
console.log(`Згода на участь : `, consert, typeof consert);
console.log(`User ID: `, userId, typeof userId);
console.log(`Bonus Code: `, bonusCode, typeof bonusCode);
console.log(`Друге ім'я: `, secondName, typeof secondName);
