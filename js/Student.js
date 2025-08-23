function Student(name, lastName, yearOfBirth, points) {
this.name = name;
this.lastName = lastName;
this.yearOfBirth = yearOfBirth;
this.points=points;
this.numberOfVisit=new Array(25);
this.count=0;

}
Student.prototype.age = function() {
    const currentYear=new Date().getFullYear();
    const age=currentYear-this.yearOfBirth;
    console.log(age);
    return `${age}`;
}

Student.prototype.averageScore=function() {
    for(let i=0; i<this.points.length;i++){
        if(typeof(this.points[i])!="number") throw new Error('Points must be a number');
    }
    const sum = this.points.reduce((a,b) => a + b, 0);
    const avg = sum / this.points.length;
    return avg;
}

Student.prototype.present=function(){
    if(this.count>=this.numberOfVisit.length) throw new Error('Array is full');
    this.numberOfVisit[this.count]=true;
    this.count++;
}
Student.prototype.absent=function(){
    if(this.count>=this.numberOfVisit.length) throw new Error('Array is full');
    this.numberOfVisit[this.count]=false;
    this.count++;
}

Student.prototype.summary=function(){
    let countPositiveVisit=0;
    const averageScoreStudent=this.averageScore();
    for(let i=0; i<this.numberOfVisit.length;i++){
        if(this.numberOfVisit[i]) {
            countPositiveVisit++;}
    }
    const averageAttendance=countPositiveVisit/this.numberOfVisit.length;
    if(averageAttendance>=0.9 && averageScoreStudent>=90){
        console.log("Молодець!");
    }
    else if(averageAttendance>=0.9 || averageScoreStudent>=90){
        console.log("Добре, але можна краще");
    }
    else{
        console.log("Редиска!");
    }
}

export  default Student;
