'use strict';

function createUI(){
    const product=dataBase.getData();
    const form=document.querySelector('[data-form]');

    const submitBtn=form.querySelector('[type="submit"]');
    submitBtn.setAttribute('disabled','disabled');
    submitBtn.disabled = true;
    const inputs = Array.from(form.querySelectorAll('input, textarea'));

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const {target:currentForm}=e;

        inputs.forEach(({name,value})=>{
            product[name]=value;
        })
        currentForm.reset();
        dataBase.setData(product);
    })

    form.addEventListener('input', (e) => {
        let isInput=true;
        for(let i=0; i<inputs.length;i++){
            if(!inputs[i].value.trim().length){
                isInput=false;
                break;
            }

        }

        if(isInput){
            submitBtn.removeAttribute('disabled');
            submitBtn.disabled = false;
        }
        else{
            submitBtn.setAttribute('disabled','disabled');
            submitBtn.disabled = true;
        }
    })

}
createUI();