'use strict';

function creationProduct(){

    const OBJECT_KEY=['name','description', 'price','id'];
    const products=JSON.parse(localStorage.getItem('products')) || [];
    const validateObject = (obj) => {
        if (typeof obj !== 'object' || obj === null) return false;
        return OBJECT_KEY.slice(0, 3).every(key => key in obj);
    };
    const getData=()=>{
        return [...products];
    }
    const setData=(data)=>{
        if(!data || typeof data !=="object") return null;
        if(!validateObject(data)) return null;

        let id=1;
        const currentData=getData();
        if(currentData.length>0)
        {
            id=currentData.at(-1).id+1;
        }

        const dataToSave={...data,id};
        products.push(dataToSave);
         localStorage.setItem('products', JSON.stringify(products));
    }
    const deleteData = (id) => {
        if(typeof id !== 'number') return null;
        const currentData = getData();

        const userIndex = currentData.findIndex((singleUser) => id === singleUser.id );

        localStorage.removeItem('products');

        console.log("delete");
        products.splice(userIndex, 1);
        localStorage.setItem('products', JSON.stringify(products));
        console.log(products);
    }
    return{
        setData,
        getData,
        deleteData
    }

}
const dataBase=creationProduct();