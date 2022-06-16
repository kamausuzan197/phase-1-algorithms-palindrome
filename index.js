//function isPalindrome(word) {
  // Write your algorithm here
  //so this i need to create a function....(block of code that is designed to perform a task and executed when called.) ,they are 3 ways of writting a function.
  //function declaration(function add(a,b){
    //console.log(a +b)
  //})
  //add(2,3);
  //,function expression
  // const add = function(a,b){
    //console.log(a +b)
 // }
 //add (2,3);
  //,arrow function.
  //let add add = (a, b) => a + b;
  //console.log(add(3, 2));
  //it should have a string 
  //string ..are a series of character that are interpreted by a script.
  //example "hello",'hello',...`hello`.

//}

/* 
  Add your pseudocode here
  //function
  //variables ...transform from a string to array so we can read from front to back and vicevasa
  //declare if...else statement .
  //then call it back .
*/

/*
  Add written explanation of your solution here

*/
let isPalindrome =(value) =>{
  //take the value into an array
  const arrayload = value.split('');
  //reversing the value to be read from front to back.
  const valuereversed =arrayload.reverse();
  //returning the array back to a string so that it can be read.
  const returnstring =valuereversed.join('');

  return value  === returnstring
}

isPalindrome('hello')
// isPalindrom('abba')
// isPalindrom('racecar')
// isPalindrom('a')
// isPalindrom('robot')
// isPalindrom('ab')

// You can run `node index.js` to view these console logs
//if (require.main === module) {
  // add your own custom tests in here
  //console.log("Expecting: true");
 // console.log("=>", isPalindrome("racecar"));

  //console.log("");

 // console.log("Expecting: false");
  //console.log("=>", isPalindrome("robot"));
//}

//module.exports = isPalindrome;
