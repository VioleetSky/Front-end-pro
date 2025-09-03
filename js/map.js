'use strict';

function groupByCategory(items){
    if(!Array.isArray(items))throw Error("Invalid parameter type");
     let itemMap=new Map();
    for (let i=0; i<items.length;i++){
        if(!itemMap.has(items[i].category.name)){
            itemMap.set(items[i].category.name,[]);
        }
        itemMap.get(items[i].category.name).push(items[i].name);
    }
    return itemMap;

}

const electronics = { name: 'Electronics' };
const books = { name: 'Books' };

const items = [
    { name: 'Laptop', category: electronics },
    { name: 'Phone', category: electronics },
    { name: 'Book A', category: books },
    { name: 'Book B', category: books },
    { name: 'Book C', category: books }

];

const result=groupByCategory(items);
console.log(result);
// Map {
// electronics => [ { name: 'Laptop', ... }, { name: 'Phone', ... } ],
// books => [ { name: 'Book A', ... } ]
// }

