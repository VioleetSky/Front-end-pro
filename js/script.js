'use strict';
const IndexOf=(arr,value, index=0)=>{
    let result=null;
for(let i=index;i<arr.length;i++){
    if(arr[i]===value){
        result=i;
        break;
    }
    else{result=-1;}
}
return result;
}
const lastIndexOf=(arr,value, index=arr.length)=>{
    let result=null;
    for(let i=index;i=>0;i--){
        if(arr[i]===value){
            result=i;
            break;
        }
        else{result=-1;}
    }
    return result;
}
const find = (arr, callback, index = 0) => {
    for (let i = index; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return arr[i];
        }
    }
    return undefined;
}
const findIndex = (arr, callback, index = 0) => {
    for (let i = index; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return i;
        }
    }
    return undefined;
}
const includes=(arr,value)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]===value){
            return true;
        }
    }
    return false;
}
const every = (arr, callback, index = 0) => {
    if(arr.length===0) return true;
    for (let i = index; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
           return false;
        }
    }
    return true;
}
const some = (arr, callback, index = 0) => {
    if(arr.length===0) return false;
    for (let i = index; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}
const arr=[1,2,3,4,5,6,7,8,9];
const arr1=[];
console.log(IndexOf(arr,5,0));
console.log(lastIndexOf(arr, 3));
console.log(find(arr,value=>value%3===0));
console.log(findIndex(arr,value=>value===5));
console.log(includes(arr, 10));
console.log(every(arr, value=>value%2===0));
console.log(every(arr1, value=>value===0));
console.log(some(arr, value=>value===1));
