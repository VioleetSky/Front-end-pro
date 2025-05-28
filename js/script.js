'use strict';

let name = prompt('What is your name?');

let result = confirm("Do you want to see the greeting?");
if (result) {
    alert("Hello, "+name);
}
else{
}