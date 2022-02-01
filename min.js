
// function
function findSmallestNumber(first, second, thrid) {
    if(first< second && first < thrid){
        return first;
    }
    else if ( second < first && second <thrid){
        return second;
    }
    else{
        return thrid;
    }
}
var firstNumber = 34;
var secondNumber = 90;
var thridNumber = 9;
var SmallestNumber = findSmallestNumber(firstNumber,secondNumber,thridNumber);
console.log("This is smallest number: ", SmallestNumber);
//  max methods 
var max = Math.max(firstNumber,secondNumber,thridNumber);
console.log("larger: ",max);
//  min methods 
var min = Math.min(firstNumber,secondNumber,thridNumber);
console.log("smaller: ",min);