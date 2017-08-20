// var names = ['Andrew', 'Julie', 'Jen'];

// names.forEach(function (name) {
//     console.log('forEach', name);
// });

// names.forEach((name) => {
//     console.log('arrowFunc', name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name +'!';
// console.log(returnMe('Alina'));

//Arrow functions don't change name prop
// var person = {
//     name: 'Alina',
//     greet: function () {
//         names.forEach( (name) => {
//             console.log(this.name + ' says hi to ' + name)
//         });
//     }
// }

// person.greet();

//Chalenge area

function add (a,b) {
    return a + b;
}

//addStatement
var addStatement= ((a,b) => {
    return a + b;
});

//addExpression
var addExpression = ((a,b) => a+b);

console.log(addStatement(1,3));
console.log(addStatement(9,0));

console.log(addExpression(1,3));
console.log(addExpression(9,0));