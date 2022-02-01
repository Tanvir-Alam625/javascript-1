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
var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for(var i = 0; i < sentence.length; i++){
  var letter = sentence[i];
  if(letter == 'i'){
    count++;
  }
}
console.log(count)
// function call    
var children = findSmallestAge(ages);
console.log(children);