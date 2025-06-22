'use strict';
//The function removes the item element from the array.
const removeElement = (array,item) => {
    for(let i=0; i < array.length; i++) {
        if(array[i] === item) {
            array.splice(i, 1);
        }
    }
    return array;
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
removeElement(array,5);
console.log(array);