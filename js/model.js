
function Model(){
this.data=JSON.parse(localStorage.getItem("task")) || [];
this.OBJECT_KEY=['title','description'];
}

Model.prototype.getData=function(){
return this.data;
}
Model.prototype.setData=function(data){
if(!this.validateData(data)) throw Error("Invalid data");
let currentId;
if(this.data.length===0){
    currentId=1;
}
else{
    const lastIndex=this.data[this.data.length-1]
    currentId=lastIndex.id !== null ? lastIndex.id+1 : 1;
}
const currentData={id: currentId, ...data};
this.data.push(currentData);
localStorage.setItem("task",JSON.stringify(this.data));
    return currentData;
}
Model.prototype.validateData=function(data){
    let isValid=true;
    if(!data || typeof data !== 'object') isValid=false;
    const dataKeys = Object.keys(data);
    dataKeys.forEach((key)=>{
        if(!this.OBJECT_KEY.includes(key)) isValid=false;
    })
    return isValid;
}
Model.prototype.deleteData=function({id}){
    const findId=this.data.findIndex((item)=>item.id===id );
    if(findId===-1)throw Error("ID not found");
    const deleteItem=this.data.splice(findId,1)[0];
    localStorage.setItem("task",JSON.stringify(this.data));
    return deleteItem;
}

Model.prototype.deleteAllData=function(){
    localStorage.removeItem("task");
}

const model=new Model();
export default model;



