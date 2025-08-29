"use strict";

class Student {
    #firstName = null;
    #lastName = null;
    #birthYear = null;
    #marks=new Array(25).fill(null);
    #attendances = new Array(25).fill(null);
    #currentIndex = 0;
    constructor(firstName, lastName, birthYear) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#birthYear = birthYear;
    }
    get firstName() {
        return this.#firstName;
    }
    set firstName(firstName) {
        if(firstName.trim().length<2) throw Error("First name is required");
        this.#firstName = firstName;
    }
    get lastName() {
        return this.#lastName;
    }
    set lastName(lastName) {
        if(lastName.trim().length<2) throw Error("Last name is required");
        this.#lastName = lastName;
    }
    get birthYear() {
        const currentYear=new Date().getFullYear();
        if(typeof this.#birthYear!=="number" || this.#birthYear.length<2 || this.#birthYear>=currentYear) throw Error("Birth year is required");
        return currentYear-this.#birthYear;
    }
    toRate(mark){
        if(typeof mark!=="number") throw Error("Mark is required");
        if(mark<0 || mark>100) throw Error("Mark is required");
        if(!this.#attendances[this.#currentIndex-1]) throw Error("Student is absent");
        this.#marks[this.#currentIndex-1] = mark;
    }
    #setAttendance(bool){
        if(typeof bool !=="boolean") throw Error("Attendance is required");
        if(this.#attendances.length>25) throw Error("Array is full");
        if(bool){ this.#attendances[this.#currentIndex]=bool;
            this.#currentIndex++;
        }
        else{
            this.#attendances[this.#currentIndex]=bool;
            this.#currentIndex++;
        }
    }
    absent(){
        this.#setAttendance(false)
    }
    present(){
        this.#setAttendance(true)
    }
    #avgGrade(){
        let result=0;
        let lessons=0;
        for(let i=0; i<this.#currentIndex; i++){
            if(this.#marks[i] !==null) lessons++;
            result+=this.#marks[i];
        }
        return result/lessons;
    }
    #avgAttendance(){
        let visitedLessons=0;
        for(let i=0; i<this.#currentIndex; i++){
            if(!this.#attendances[i]) continue;
            visitedLessons++;
        }
        return visitedLessons/this.#currentIndex;

    }
    summary(){
        const avgGrade=this.#avgGrade();
        const avgAttendance=this.#avgAttendance();
        if(avgGrade>90 && avgAttendance>0.9){
            console.log("Молодець");
        }
        else if(avgGrade>90 || avgAttendance>0.9){
            console.log("Добре, але можна краще");
        }
        else{
            console.log("Редиска");
        }
    }

}

const student1 = new Student('Alex', 'Park', 1997);

student1.present();
student1.toRate(100)
student1.present();
student1.toRate(100)
student1.absent();
student1.present();
student1.toRate(90)
student1.present();
student1.toRate(98)
student1.present();
student1.toRate(100)
student1.summary();
console.log(student1);

const student2 = new Student('Alice', 'Jackson', 2004);
student2.present();
student2.present();
student2.toRate(75);
student2.toRate(80);
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.summary();
console.log(student2);