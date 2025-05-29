'use strict';

const name="Pavlo";                     //Username
let age=36;                            //User Age (it's not a constant, since a person ages over time)
const userBirthday = `20.03.1995`       //User Birthday
let verificationUser=true;            //User account verification
const registrationDate=`25.11.2019`;    //Account registration date
const cardID=493361278n;                //User card number
let promoCode=null;                      //Promo Code
let backupName=undefined;            //Backup username
let bonusAccount=49.3;                 //Available bonuses


console.log(`Ім'я користувача: ${name}; Тип даних: ${typeof name}\nВік: ${age}; Тип даних: ${typeof age}\nДата реєстррації: ${registrationDate}; Тип даних: ${typeof registrationDate}`);
console.log(`Номер карти користувача: ${cardID};  Тип даних: ${typeof cardID} \nРезервне ім'я: ${backupName}; Тип даних: ${typeof backupName} \nВерифікований аккаунт: ${verificationUser}; Тип даних: ${typeof verificationUser}`);
console.log(`Кількість бонусів на рахунку: ${bonusAccount}; Тип даних: ${typeof bonusAccount} \nПромокод: ${promoCode};  Тип даних: ${typeof promoCode}`);


