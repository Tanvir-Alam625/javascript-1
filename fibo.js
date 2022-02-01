//function 
function findFibonacci(number) {
    if(typeof number != 'number'){
        return "please input the number";
    }
    if( number < 2){
        return "please input the valid number gatter then 2 ";
    }
    let fibo = [0,1];
    for(let i =2; i < number; i++){
        fibo[i]= fibo[i-1] + fibo[i-2];

    }
    return fibo;
}
// function calling
var output = findFibonacci(3);
console.log(output);