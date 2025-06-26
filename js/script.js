'use strict';
const arr=[16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let sumPos=0;
const sumOfPositiveEl=(arr)=>{
    let counter=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=0){
            counter++;
            sumPos+=arr[i];
        }
    }
    return counter;
}
const minElement=(arr)=>{
    let element=arr[0];
    let index=null;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<element){
            element=arr[i];
        }
    }
    for(let i=0;i<arr.length;i++){
        if(element===arr[i]){
            index=i;
            break;
        }
    }
    return`index ${index}, element ${element}`;
}
const maxElement=(arr)=>{
    let element=arr[0];
    let index=null;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>element){
            element=arr[i];
        }
    }
    for(let i=0;i<arr.length;i++){
        if(element===arr[i]){
            index=i;
            break;
        }
    }
    return`index ${index}, element ${element}`;
}
const counterNegative=(arr)=>{
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            count++;
        }
    }
    return count;
}
const counterOddPosElement=(arr)=>{
    let counter=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0 && arr[i]%2!==0){
            counter++;
        }
    }
    return counter;
}
const counterPairPosElement=(arr)=>{
    let counter=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0 && arr[i]%2===0){
            counter++;
        }
    }
    return counter;
}
const sumPairPosElement=(arr)=>{
    let result=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0 && arr[i]%2===0){
            result+=arr[i];
        }
    }
    return result;
}
const sumOddPosElement=(arr)=>{
    let result=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0 && arr[i]%2!==0){
           result+=arr[i];
        }
    }
    return result;
}
const productPosElement=(arr)=>{
        let result=1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
           result*=arr[i];
        }
    }
    return result;

}
const max=(arr)=>{
    let element=arr[0];
    let index=null;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>element){
            element=arr[i];
        }
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==element){
        arr[i]=0;
        }
    }
    return arr;


}
console.log(sumOfPositiveEl(arr),sumPos);
console.log(minElement(arr));
console.log(maxElement(arr));
console.log(counterNegative(arr));
console.log(counterOddPosElement(arr));
console.log(counterPairPosElement(arr));
console.log(sumPairPosElement(arr));
console.log(sumOddPosElement(arr));
console.log(productPosElement(arr));
console.log(max(arr));