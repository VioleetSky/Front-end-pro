"use strict";

function filterUniqueByReference(arr){
    if(!Array.isArray(arr))throw Error("Invalid parameter type");
const setArray=new Set(arr);
return Array.from(setArray);
}
const obj1 = { name: "a" };
const obj2 = { name: "a" };

const input = [obj1, obj1, obj2, obj2, obj1];

const res = filterUniqueByReference(input);
console.log(res);
// => [obj1, obj2]
