'use strict';

const yearOfBirth=prompt(`Введіть Ваш рік народження`);
let age=null;
if(yearOfBirth===null)
{alert(`Шкода,що Ви не захотіли ввести свою дату народження`);}
else{
    age=2025-yearOfBirth;
}

const city=prompt(`Введіть місто в якому Ви знаходитесь`);
if(city===null){alert(`Шкода,що Ви не захотіли ввести своє місто`)};

const sport=prompt(`Введіть Ваш улюблений вид спорту`);
if(sport===null){alert(`Шкода,що Ви не захотіли ввести вид спорту`)};

let sportMessage=null;
let cityMessage=null;

switch(city){
    case `Київ`:
    case `Вашингтон`:
    case `Лондон`:
        cityMessage=`Ти живеш у столиці: ${city}`;
        break;
    case null:
        cityMessage=`Місто невідоме`;
        break;
    default:
        cityMessage=`Ти живеш у місті: ${city}`;
}

switch (sport){
    case `Плавання`:
        sportMessage=`“Круто! Хочеш стати як Яна Клочкова ?`
        break;
    case `Бокс`:
        sportMessage=`“Круто! Хочеш стати як Василь Ломаченко ?`
        break;
    case `Гімнастика`:
        sportMessage=`“Круто! Хочеш стати як Лілія Подкопаєва ?`
        break;
        case null:
            sportMessage=`Невідомий вид спорту`;
            break;
        default: `Чудовий вид спорту`;
}

const ageMessage=age===null? `Невідомо`:String(age) ;
alert(`Ваш вік: ${ageMessage} \n ${cityMessage} \n ${sportMessage}`);
