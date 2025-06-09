'use strict';

//1 Task
//using an array, we display the numbers from 10 to 20 in one line
let resultFirstTask=10;
for(let i=11; i<21;i++){
resultFirstTask+=", "+i;
}
console.log(resultFirstTask);
//2 Task
// we use a for loop to calculate the square of numbers from 10 to 20
for(let i=10;i<21;i++){
    console.log(Math.pow(i,2));
}
//3 Task
//multiplication table for 7
const numberThird=7;
for(let i=1;i<11;i++){
console.log(`${i}*7=${numberThird*i}`);
}
//4 Task
//Find the sum of all integers from 1 to 15
let counterFourthTask=1;
let sumFourthTask=null;
while(counterFourthTask<16){
sumFourthTask+=counterFourthTask;
counterFourthTask++;
}
console.log(sumFourthTask);
//5 Task
//Find the product of all integers from 15 to 35
let counterFifthTask=15;
let sumFifthTask=1n;
while(counterFifthTask<36){
    sumFifthTask*=BigInt(counterFifthTask) ;
    counterFifthTask++;
}
console.log(sumFifthTask);
//6 Task
//Find the arithmetic mean of all integers from 1 to 500
let numberSixthTask=1;
let resultSixthTask=0;
while(numberSixthTask<501){
    resultSixthTask+=numberSixthTask;
    numberSixthTask++;
}
console.log(resultSixthTask/500);
//7 Task
//Print the sum of only even numbers in the range from 30 to 80
let numberSeventh=30;
let counterSeventh=0;
while(numberSeventh<81){
    if(numberSeventh%2===0)
    {
        counterSeventh+=numberSeventh;
    }
    numberSeventh++;
}
console.log(counterSeventh);
//8 Task
//Output all numbers in the range from 100 to 200 that are multiples of 3
let numberEighth=100;
while (numberEighth<201){
    if(numberEighth%3===0) console.log(numberEighth);
    numberEighth++;
}
//9-11 Task
//Given a natural number, find and print all its divisors.
let numberNinthTask=+prompt('Enter your number');
for(let i=1;i<numberNinthTask;i++){
    if(numberNinthTask%i===0) console.log(i);
}
//Determine the number of its even divisors.
let counterTenthTask=0;
for(let i=1;i<numberNinthTask;i++) {
if(numberNinthTask%i===0) {
    if(i%2===0) {
        counterTenthTask++;
    }
}
}
console.log(counterTenthTask);
//Find the sum of its even divisors
let resultEleventhTask=0;
for(let i=1;i<=numberNinthTask;i++) {
    if(numberNinthTask%i===0) {
        if(i%2===0) {
            resultEleventhTask+=i;
        }
    }
}
console.log(resultEleventhTask);
//12 Task
//Print the complete multiplication table from 1 to 10
for (let i=1;i<11;i++) {
    let counterTwelfth=1;
    while(counterTwelfth<11){
        console.log(`${i}*${counterTwelfth}=${i*counterTwelfth}`);
        counterTwelfth++;
    }
}
