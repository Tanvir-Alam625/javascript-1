// function 
function findLargestNumber(firstNumber, secondNumber, thridNumber) {
    if(firstNumber> secondNumber && firstNumber> thridNumber ){
        return firstNumber;
    }
    else if(secondNumber> firstNumber && secondNumber> thridNumber){
        return secondNumber;
    }
    else{
        return thridNumber;
    }
}
var LargestNumber =findLargestNumber(11335,1651,354)
console.log(" This is largest number:  ",LargestNumber);
