import Student from "./Student.js";

const Petro=new Student('Petro', 'Ivanov', 1999, [90,92,50,100,98,99,99,100]);
const Mary=new Student('Mary', 'Kay', 2010, [60,80,83,76,90,100,45,66,83,87,64]);

Petro.age();
for(let i=0; i<24;i++){
    Petro.present();
}
Petro.absent();
Petro.summary();

Mary.age();
for(let i=0; i<18;i++){
    Mary.absent();
}
for(let i=0; i<7;i++){
    Mary.present();
}
Mary.summary();