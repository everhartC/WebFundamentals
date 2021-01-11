function print_odds()
{
    var sum = 0;
    for ( i=1; i<=20; i++)
    {
        if(i % 2 == 1)
        {
            console.log(i);
            sum += i;
        }
    }
    return i;
}
var odds = print_odds();


function printNumsandSums()
{
    var sum = 0;
    for (i = 1; i<=5; i++)
    {
        sum+=i;
        console.log("Num: ", i + ",", "Sum: ", sum);
    }
}
printNumsandSums();