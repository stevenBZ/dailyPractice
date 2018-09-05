// var setPerson = function(person) {
//     person.name = 'kevin';
//     person = {name: 'Nick'};
//     console.log(person.name);       
//     person.name = 'Jay';
//     console.log(person.name);       
// }
// var person = {name: 'Alan'};
// setPerson(person);
// console.log(person.name);           

function test(){
    return function m(){
        console.log('test');
    }
}
setTimeout(test(), 0);
console.log('ok');
