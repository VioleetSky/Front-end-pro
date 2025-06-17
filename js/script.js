'use strict';

const padString = (str,length,symbol,side) => {
    let messageError=null;
    if(str===undefined){
        messageError="Invalid string";
        return messageError;
    }
    else if(length===undefined){
        messageError="Invalid lenght";
        return messageError;
    }
    else if(symbol===undefined){
        messageError="Invalid symbol";
        return messageError;
    }
    else if(side===undefined){
        messageError="Invalid boolean";
        return messageError;
    }
    else {
        if (str.length < length) {
            if (side) {
                return str.padEnd(length, symbol);
            } else {
                return str.padStart(length, symbol);
            }
        } else {
            return str.substr(0, length);
        }
    }
}
console.log(padString('hello', 3, '-',false));