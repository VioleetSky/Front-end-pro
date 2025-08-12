'use strict';

function createUserInterface() {

    const form = document.querySelector('[data-form]');

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.setAttribute('disabled', 'disabled');
    submitBtn.disabled = true;

    const inputs = Array.from(form.querySelectorAll('input'));

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const {target} = e;

        // Get data from the form
        const data = inputs.reduce((acc, {name, value}) =>{
            acc[name] = value;
            return acc;
        }, {});


        target.reset()

        dataBase.setData(data)

        console.log(dataBase.getData())


       addContactsLabel();
    });

    const addContactsLabel = () => {
        const contactList = document.querySelector('.list-group');
        contactList.innerHTML = '';

        const currentDB = dataBase.getData();

        currentDB.forEach((user) => {
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.dataset.id = user.id;
            li.innerHTML = `
            ${user.firstName} ${user.lastName}, ${user.phone} 
            <button class="btn btn-danger btn-sm">Delete</button>
        `;
            contactList.append(li);
        });
    };

    document.querySelector('.list-group').addEventListener('click', (e) => {
        if (e.target.matches('.btn-danger')) {
            const liElement = e.target.closest('li');
            const id = Number(liElement.dataset.id);

            dataBase.deleteData({ id });
            liElement.remove();
        }
    });




    const disabledHandler = (e) => {
        let isInputFilled = true;
        for(let i = 0; i < inputs.length; i++) {
            if(!inputs[i].value.trim().length) {
                isInputFilled = false;
                break;
            }
        }

        if(isInputFilled) {
            submitBtn.removeAttribute('disabled')
            submitBtn.disabled = false;
        } else {
            submitBtn.setAttribute('disabled', 'disabled');
            submitBtn.disabled = true;
        }
    }
    form.addEventListener('input', disabledHandler);


}

createUserInterface()