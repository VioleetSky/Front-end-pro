import model from './model.js';

function View(){
    this.form=document.getElementById('todoForm');
    this.divRow = document.getElementById('todoItems');
}
View.prototype.render=function(){
    const inputs=Array.from(document.querySelectorAll('[required]'));
    let data=null;

    const tasksRender=model.getData();
    tasksRender.forEach(task=>{
        this.renderTask(task);
    })

    const btnSub=document.querySelector('.btn.btn-primary');
    const btnClearForm=document.querySelector('.btn.btn-warning');
    btnSub.addEventListener('click', (e) => {
        e.preventDefault();
        data= inputs.reduce((acc, {name, value}) => {
            acc[name] = value;
            return acc;
        },{});
        const newTask =model.setData(data);
        this.renderTask(newTask);
        console.log('sub');
        console.log(data);
        this.form.reset();

    });

    btnClearForm.addEventListener('click', (e) => {
        e.preventDefault();
        this.form.reset();
    });

}

View.prototype.renderTask = function(data){

    const col = document.createElement('div');
    col.classList.add('col-4');
    const wrapper = document.createElement('div');
    wrapper.classList.add('taskWrapper');
    wrapper.innerHTML = `
       <div class="taskHeading">${data.title}</div>
       <div class="taskDescription">${data.description}</div>
       <hr>
       <label class="completed form-check">
          <input type="checkbox" class="form-check-input">
          <span>Завершено ?</span>
       </label>
       <hr>
       <button class="btn btn-danger delete-btn">Удалить</button>
    `;

    col.append(wrapper);
    this.divRow.append(col);

    const btnDeleteTask = wrapper.querySelector('.btn.btn-danger.delete-btn');
    btnDeleteTask.addEventListener('click', (e) => {
        e.preventDefault();
        col.remove();
        model.deleteData(data);
    });

    const btnDeleteAll=document.querySelector('.btn.btn-danger.remove-all');
    btnDeleteAll.addEventListener('click', (e) => {
        const currentDiv=this.divRow.querySelector('.col-4');
        e.preventDefault();
        console.log('deleteAll');
        model.deleteAllData();
        currentDiv.remove();
    })
}


const view=new View();
view.render();




