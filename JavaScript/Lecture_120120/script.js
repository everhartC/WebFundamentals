// Variables and Data Types


var kitchen = "pots and pans";
// console.log(kitchen);
// console.log(kitchen.length);

var num = 10;

x = 20;
// console.log(num,x);

var students = ["1","2","3","4"];
// console.log(students[students.length-1]);
// console.log(students.length[-1]);



var ninja={
    'name': "Cameron",
    'fav_lang': 'Javascript',
    'skills': 'python'
}
// console.log(ninja.fav_lang);
// console.log(ninja['name']);

// console.log(ninja.keys);

// Conditionals
var trash_taken = false;

// for(var start=0; start<students.length; start++)
// {
//     console.log(students[start]);
// }


for(att in ninja){
    // console.log(att);
    console.log(ninja[att]);
}