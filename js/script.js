'use strict';

const selectElement=document.getElementById("filter");
const allCards=document.querySelectorAll('.card');
selectElement.addEventListener("change", (event) => {
const filterValue = event.target.value;
allCards.forEach(card => {
    const cardCategory=card.getAttribute('data-category');
    if(cardCategory===filterValue){
        card.style.display="block";
    }
    else{
        card.style.display="none";
    }
})
})
