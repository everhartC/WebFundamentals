var testArr = [6, 3, 5, 1, 2, 4];

function printValandSum()
{
    var sum = 0;
    for (i = 0; i<testArr.length; i++)
    {
        console.log("Num ", testArr[i] + ",", "Sum ", sum+=testArr[i]);
    }
}


function printValXPos()
{
    var x = [];
    for (i = 0; i<testArr.length; i++)
    {
        x.push(i*testArr[i]);
    }
    console.log(x);
}


printValandSum();
printValXPos();