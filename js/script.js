'use strict';


const name = prompt(`What is your name?`);
const age=Number(prompt(`What is your age?`));
const consertToNotification=confirm(`Do you want to receive notifications?`);
const userId=123456789054321n;
let lastLogin=null;
let nickName;
const favoriteTech=[`JavaScript`,`Node.js`,`TypeScript`];
const settings={
    theme:"dark",
    autoLogin:false
};
const session={
    name:name,
    age:age,
    consertToNotification:consertToNotification,
    userId:userId,
    lastLogin:lastLogin,
    nickName:nickName,
    favoriteTech:favoriteTech,
    settings:settings
};
alert(`Привіт, ${session.name}! Ваше ID: ${session.userId}`);
console.log(session);
console.log(typeof session.name);
console.log(typeof session.age);
console.log(typeof session.consertToNotification);
console.log(typeof session.userId);
console.log(typeof session.lastLogin);
console.log(typeof session.nickName);
console.log(typeof session.favoriteTech);
console.log(typeof session.settings);
console.log(typeof session.settings.theme);
console.log(typeof session.settings.autoLogin);