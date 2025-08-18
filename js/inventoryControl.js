'use strict';

function tableOutput(){
    const products=JSON.parse(localStorage.getItem('products'));
    if(products.length===0) return;

    const div =document.querySelector('[data-form]');
    products.forEach((product)=>{
    const ul=document.createElement("ul");
    ul.classList.add('list-group');
    ul.classList.add('list-group-horizontal');
    ul.setAttribute('product-id', product.id);
        ul.innerHTML =
            "<li class=\"list-group-item w-25 mb-2\">" + product.name + "</li>" +
            "<li class=\"list-group-item mb-2 w-25\">" + product.description + "</li>" +
            "<li class=\"list-group-item d-flex justify-content-end align-items-center gap-2 mb-2 w-25\">" +
            "<span class='me-3'>" + product.price + "</span>" +
            "<button type=\"button\" class=\"btn btn-success\">" +
            "<i class=\"bi bi-pencil\"></i>" +
            "</button>" +
            "<button type=\"button\" class=\"btn btn-danger\">" +
            "<i class=\"bi bi-trash\"></i>" +
            "</button>" +
            "</li>";
        div.append(ul);
    })


    div.addEventListener('click', (e)=>{
        const ul = e.target.closest('[product-id]');
        if(e.target.closest('.btn-success')){
        location.href = "productEditing.html";
        localStorage.setItem('selectedProductID', ul.getAttribute('product-id'));
        }
        if (e.target.closest('.btn-danger')) {
            const productId = Number(ul.getAttribute('product-id'));
            dataBase.deleteData(productId);
            ul.remove();
        }

    })
}

tableOutput();