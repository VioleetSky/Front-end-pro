'use strict';

const shift=(array)=>{
    if(array.length==0){
        return undefined;
    }
const value=array[0];
for(let i=0;i<array.length;i++){
    array[i]=array[i+1];
}
array.length-=1;
    return value;
}
const reverse=(array)=>{
    for(let i=0;i<array.length/2;i++){
        const val=array[i];
        let j=array.length-1-i;
        array[i]=array[j];
        array[j]=val;
    }

    return array;
}
const array=[1,2,3,4,5,6,7,8,9,10];
const array2=[1,2,3];
const value=shift(array);
reverse(array2);
console.log(array,array2);