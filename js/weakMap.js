'use strict';

function createMetadataStorage(){
 const weakMap = new WeakMap();

function setMetadata(obj, metaData){
    if(typeof obj !== "object" && typeof metaData !== "object") throw Error('Invalid parameter type');
    return weakMap.set(obj, metaData);
}
function hasMetadata(obj){
    if(typeof obj !== "object") throw Error("Invalid parameter type");
    return weakMap.has(obj);
}
function getMetadata(obj){
    if(typeof obj !== "object") throw Error("Invalid parameter type");
return weakMap.get(obj);
}
return{
    setMetadata,
    hasMetadata,
    getMetadata
}
}

const storage = createMetadataStorage();

const user1 = { name: "Анна" };
const user2 = { name: "Олег" };

storage.setMetadata(user1, { role: "admin" });
storage.setMetadata(user2, { role: "user" });

console.log(storage.getMetadata(user1)); // { role: "admin" }
console.log(storage.hasMetadata(user2)); // true
