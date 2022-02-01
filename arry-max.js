// variable declearation 
const  ages =[12,89,56,89,45,7,4,65,99] ;
const  childAges =[-12,-89,-56,-89,-45,-7,-4,-65,-99]; 
// function 
function findLargestAge(number) {
    let largest = number[0];
    for(let i=0; i< number.length; i++){
        let element = number[i];
        if(largest < element){
            largest = element;
        }
    }
    return largest;
}
// function call 
var oldest = findLargestAge(ages);
console.log(oldest);