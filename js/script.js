'use strict';

function findValuesByKey(obj, targetKey){
let keys=[];
    for(let key in obj){
        if(key == targetKey){
          keys.push(obj[key]);
        }
        else if (typeof obj[key] === "object"){
            const valueFunc=findValuesByKey(obj[key], targetKey);
       keys.push(...valueFunc);
        }
    }
    return keys;
}
const data = {
    id: 1,
    name: "root",
    meta: {
        id: 2,
        parent: {
            id: 3,
            name: "leaf",
        },
    },
    array: [
        { id: 4 },
        { name: "node", children: [{ id: 5 }] },
    ],
};
console.log(findValuesByKey(data, "id"));
// ➜ [1, 2, 3, 4, 5]
