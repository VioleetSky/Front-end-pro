'use strict';

class ObjectTracker{
    #weakSet = new WeakSet();

    mark(obj){
        if(typeof obj !== 'object') throw Error("Invalid parameter type");
        const control=this.#weakSet.has(obj);
        this.#weakSet.add(obj);
        return control;
    }
    wasProcessed(obj){
        return this.#weakSet.has(obj);
    }


}
const tracker = new ObjectTracker();

const obj = { name: "A" };

console.log(tracker.wasProcessed(obj)); // false
tracker.mark(obj);
console.log(tracker.wasProcessed(obj)); // true


