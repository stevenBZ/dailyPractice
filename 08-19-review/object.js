function Student(props){
    this.name = props?props.name:'node';
    this.title = 'life';
}
function PrimaryStudent(props){
    Student.call(this, props);
    this.grade = props?props.grade:'2';
}
// PrimaryStudent.prototype = new Student();
// let F = function(){};
// F.prototype = Student.prototype;
// PrimaryStudent.prototype = new F();

let a = new PrimaryStudent();

console.log(a);