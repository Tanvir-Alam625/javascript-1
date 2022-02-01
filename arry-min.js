// variable declearation 
const ages = [98,6,35,32,57,2,7,67,23];
const ages1 = [-98,-6,-35,-32];
//function 
function findSmallestAge(number) {
    let smallest = number[0];
    for(let i= 0; i < number.length; i++){
        let element = number[i];
        if( element < smallest){
            smallest = element;
        }
    }    
    return smallest;
}
// function call    
var children = findSmallestAge(ages);
console.log(children);