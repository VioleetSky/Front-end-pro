'use strict';

function productEditing(){
    const productId=Number(localStorage.getItem("selectedProductID"));
    const products=JSON.parse(localStorage.getItem("products"));


    const inputName=document.getElementById("productName");
    const textareaDescription=document.getElementById("productDescription");
    const inputPrice=document.getElementById("productPrice");

    let product=null;
    products.forEach((item)=>{
        if(item.id==productId){
            product=item;
            console.log(product);
        }
    })
    if(!product) return;

    inputName.value=product.name;
    textareaDescription.value=product.description;
    inputPrice.value=product.price;

    const btn=document.querySelector(".btn-primary");
    btn.addEventListener("click",(e)=>{
        console.log("clicked");
        e.preventDefault();
        e.stopPropagation();
        const newName = inputName.value.trim();
        const newDescription = textareaDescription.value.trim();
        const newPrice = Number(inputPrice.value);

        const productIndex=products.findIndex(item=>item.id===productId);
        products[productIndex].name = newName;
        products[productIndex].description = newDescription;
        products[productIndex].price = newPrice;

        localStorage.setItem("products", JSON.stringify(products));
        console.log(products);

    })

}

productEditing();