// variables diclearation 
var numbers = [90,45,34,24,54,6,7,5,34,23,687,15,15,6,38,6,956,46]
// function 
function findElementSum(numbers) {
    let sum  = 0;
    for(let i = 0; i < numbers.length; i++ ){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
//  function call
var sumElement = findElementSum(numbers) ;
// output
console.log(sumElement);