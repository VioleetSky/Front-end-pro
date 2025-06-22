'use strict';

const arrayCheck=(array)=>{
    const additionalArray=[];
    if(array.length===0){
        return `The array contains no values`;
    }
    for(let i=0;i<array.length;i++){
        if(array[i]>=0){
            additionalArray.push(array[i]);
        }
    }
    if(additionalArray.length===0){
        return null;
    }
    return additionalArray;
}
const dateCheck=(array,callback)=>{
for(let i=0;i<array.length;i++){
 if(typeof array[i]==='number' && !isNaN(array[i])){
     callback(array[i]);
 }
}}
const array=[-3,-2,-1,0,1,'Cat',2,3,4];
const filtredArray=arrayCheck(array);
if(Array.isArray(filtredArray)){
    dateCheck(filtredArray, function (num){
console.log(num);
    });
}
else{
    console.log(filtredArray);
}
