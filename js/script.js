'use strict';
//Task 1
//Output the numbers from 20 to 30 through a gap, using a step of 0.5 (20 20.5 21 21.5….).
let resultFirstTask=20;
for(let i=20.5; i<30.5;)
{
    resultFirstTask+=" "+i;
    i+=0.5;
}
console.log(resultFirstTask);
//Task 2
//One dollar costs 27 hryvnias. Output the data with the calculation of the cost of 10, 20, 30... 100 dollars.
let resultSecondTask=null;
for(let i=10; i<101; ){
    resultSecondTask+=" "+i*27;
    i+=10;
}
console.log(resultSecondTask);
//Task 3
//Given an integer. Print all integers from 1 to 100 whose square does not exceed the number N.
const numberThirdTask=prompt("Enter a number:");
for(let i=1; i<101; i++)
{
    if(Math.pow(i,2)<=numberThirdTask) {
        console.log(`Квадрат числа ${i}: ${Math.pow(i,2)}`);
    }
}
// Task 4
//Given an integer. Find out if it is prime (a prime number is a number greater than 1 that has no other divisors than 1 and itself).
const numberFourth=+prompt('Enter a number: ');
let isPrime=true;
for(let i=2; i<numberFourth;i++){
    if(numberFourth%i===0){
        isPrime=false;
        break;
    }
    else{
     isPrime=true;
    }
}
let messageFourthTask= isPrime ? `Число є простим`:`Число не є простим`;
console.log(messageFourthTask);
// Task 5
//Given a number, determine whether this number can be placed by raising 3 to a certain power. (For example, the numbers 9 and 81 can be obtained, but 13 cannot.)
const numberFifthTask=+prompt('Enter a number');
let power=1;
let isPower=false;
while(power<=numberFifthTask){
    if(power===numberFifthTask){
        isPower=true;
        break;
    }
    power*=3;
}
let messageFifthTask=isPower? `${numberFifthTask} можна отримати, як 3 в якомусь степіні`:`${numberFifthTask} не можна отримати, як 3 в якомусь степені`;
console.log(messageFifthTask);


