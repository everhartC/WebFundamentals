// 1. Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function get1to255(){
    var arr = [];
    for(var i=1; i<255; i++){
        arr.push(i);
    }
    return arr;
}
var x = get1to255();


// 2. Get even 1000 - Write a function that would get the sum of all the even 
// numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function getEvens1000(){
    var summ = 0;
    for(var i=0; i<=1000; i++){
        if(i%2==0){
            summ+=i;
        } // if EVEN
    }
    return summ;
}
var x = getEvens1000();


// 3. Sum odd 5000 - Write a function that returns the sum of all the 
// odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function sumOdd5000(){
    var summ = 1;
    for(var i=1; i<=5000; i++){
        if(i%2 != 0){
            summ+=i;
        }
    }
    return summ;
}
var x = sumOdd5000();


// 4. Iterate an array - Write a function that returns the sum of all
// the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function iterray(arr){
    var summ = 0;
    for(var i = 0; i < arr.length; i++){
        summ+=arr[i];
    }
    return summ;
}
var x = iterray([1,6,4,3,2,6,7]);


// 5. Find max - Given an array with multiple values, write a function that 
// returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function findMax(arr){
    var max = arr[0];
    for(var i=0; i<arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}
var x = findMax([5,1,4,8,3,1,9]);


// 6. Find average - Given an array with multiple values, write a function that 
// returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function findAVG(arr){
    var avg = 0;
    for(var i = 0; i < arr.length; i++){
        avg += arr[i];
    }
    return avg/arr.length;
}
var x = findAVG([4,5,6,1,2]);


// 7. Array odd - Write a function that would return an array of all the 
// odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function arrayOdd(){
    var odds = [];
    for(var i = 0; i < 50; i++){
        if(i%2 != 0){
            odds.push(i);
        }
    }
    return odds;
}
var x = arrayOdd();


// 8. Greater than Y - Given value of Y, write a function that takes an array and 
// returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] 
//and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function greaterThanY(arr, Y){
    var count = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]>Y){
            count++;
        }
    }
    return count;
}
var x = greaterThanY([1,3,5,7],3);


// 9. Squares - Given an array with multiple values, write a function that replaces 
// each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
function SQuaresSquared(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i]*arr[i];
    }
    return arr;
}
var x = SQuaresSquared([1,5,10,9]);


// 10. Negatives - Given an array with multiple values, write a function that replaces any 
// negative numbers within the array with the value of 0. When the program is done the array 
// should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function replaceWithZero(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}
var x = replaceWithZero([51,1,4,-2,-9,11]);


// 11. Max/Min/Avg - Given an array with multiple values, write a function that returns a 
// new array that only contains the maximum, minimum, and average values of the original array. 
// (e.g. [1,5,10,-2] will return [10,-2,3.5])
function maxMinAvg(arr){
    var max = arr[0];
    var minim = arr[0];
    var avg = 0;
    for(var i = 0; i < arr.length; i++){
        avg += arr[i];
        if(max < arr[i]){
            max = arr[i];
        }
        else{
            minim = arr[i];
        }
    }
    var combined = [max,minim,avg];
    return combined;
}
var x = maxMinAvg([1,5,10,-2]);


// 12. Swap Values - Write a function that will swap the first and last values of 
// any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] 
// will become [-2,5,10,1]).
function swapVals(arr){
    var first = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = first;
    return arr;
}
var x = swapVals([1,4,5,8]);

// 13. Number to String - Write a function that takes an array of numbers and replaces 
// any negative values within the array with the string 'Dojo'. For example if 
// array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function num2Str(arr){
    var d = "Dojo";
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = d;
        }
    }
    return arr;
}
var x = num2Str([1,6,-8,-2,4]);












