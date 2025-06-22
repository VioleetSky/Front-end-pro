'use strict';
//Task 1
//function that calculates the arithmetic mean of only the numeric elements of a given array
const arrayFirstTask=['Cat',3,56,'Y',8,'rock',21];
const functionFirstTask=(array)=>{
    let result=null;
    let counter=null;
    for(let i=0;i<array.length;i++){
        if(typeof array[i]==='number'&& !isNaN(array[i])){
            counter++;
            result+=array[i];
        }
    }
    return result/counter;
}
console.log(functionFirstTask(arrayFirstTask));
//Task 2
//the result of the mathematical operation specified in the variable znak
const doMath=(x,znak,y)=>{
    let result=null;
switch (znak){
    case '+':
        result=x+y;
        break;
    case '-':
        result=x-y;
        break;
    case '*':
        result=x*y;
         break;
    case '/':
        result=x-y;
        break;
    case '%':
        result=x%y;
        break;
    case '^':
        result=Math.pow(x,y);
        break;
        default:
           result=`Invalid sign`;
            break;
}
return result;
}
const x=Number(prompt(`Enter x`));
const y=Number(prompt(`Enter y`));
const znak=String(prompt(`Enter znak`));
const result=doMath(x,znak,y);
console.log(`${x} ${znak} ${y} = ${result}`);
//Task 3
//function to fill a two-dimensional array with user data
let arrayTaskThird=[];
const arrayLenght=Number(prompt(`Enter Lenght`));
arrayTaskThird.length=arrayLenght;
const functionThirdTask=(arrayTaskThird)=>{
for(let i=0;i<arrayLenght;i++){
    const length=Number(prompt(`Enter array Lenght`));
    arrayTaskThird[i]=[];
for(let j=0;j<length;j++){
    const value=prompt(`Enter value`);
    arrayTaskThird[i][j]=value;
}
}
return arrayTaskThird;
}
console.log(functionThirdTask(arrayTaskThird));
//Task 4
//function that removes from a string all the characters that we passed in the second argument
const stringFourthTask=prompt('Enter string');
const lenghtFourthTask=prompt('Enter the number of characters to be deleted');
let arrayForSymbol=[];
for(let i=0;i<lenghtFourthTask;i++){
    const symbol=prompt(`Enter symbol`);
    arrayForSymbol[i]=symbol;
}
const functionFourthTask=(string,symbols)=>{
    const arrString=string.split('');
    for(let i=0;i<arrString.length;i++){
        for(let j=0;j<symbols.length;j++){
            if(arrString[i]===symbols[j]){
                arrString.splice(i,1);
            }
        }
    }
    return arrString;
}
console.log(functionFourthTask(stringFourthTask,arrayForSymbol).toString());