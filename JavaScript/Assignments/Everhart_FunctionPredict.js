function greeting(){
    return "Hello";
    console.log("World");
}
var word = greeting();
console.log(word);

// Predict "Hello". I think that because it's before the console log it won't be activated.
// Also, The console log is just printing something to the screen. 

function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    return sum;
}
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1);
console.log(result2);

// Predict "Summing Numbers!, num1 is: 3, num2 is: 5"
// Predict "Summing Numbers!, num1 is: 4, num2 is: 7"
// Predict 8, 11


function highFive(num)
{
    for(var i=0; i<num; i++)
    {
        if(i == 5)
        {
            console.log("High Five!");
        }
        else
        {
            console.log(i);
        }
    }
}

//Predict nothing will happen because nothing is returned. and nothing is called
