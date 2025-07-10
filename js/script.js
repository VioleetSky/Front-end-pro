'use strict';

function apply(context, args){
    context.fn = this;
    let result = context.fn(...args);
    delete context.fn;
    return result;
}

function bind(context){
    let func = this;
    return function(a, b) {
        context.fn = func;
        let result = context.fn(a, b);
        delete context.fn;
        return result;
    }
}
function greet(greeting, name) {
    return `${greeting}, ${name}! Я ${this.title}`
}
const context = { title: 'студент' };
console.log(greet.apply(context, ['Вітаю Вас', 'Петро']));
const multiply = function(a, b) {
    return this.factor * a * b;
}
const ctx = { factor: 2 };
const boundMultiply = multiply.bind(ctx);
console.log(boundMultiply(3, 4));