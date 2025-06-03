'use strict';

const user={
    name:`John`,
    age:25,
    isOnline:true,
    friends:[`Mary`,`Sten`,`Alex`],
    settings:
        {
            theme:`light`,
             notification: false
        }
};

const firstFriendName=user.friends[0];
const notificationsEnabled=user.settings.notification;

console.log(`Ім’я користувача: ${user.name}`);
console.log(`Кількість друзів: ${user.friends.length}`);
console.log(`Ім’я першого друга: ${firstFriendName}`);
console.log(`Яка тема увімкнена: ${user.settings.theme}`);
console.log(`Чи ввімкнені сповіщення: ${notificationsEnabled}`);
