// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  
  var passLength = prompt("Please enter the length of the Password")

  return n;
}


//    function rand(length, ...ranges) {
//    var str = "";                                                       // the string (initialized to "")
//    while(length--) {                                                   // repeat this length of times
//    var ind = Math.floor(Math.random() * ranges.length);              // get a random range from the ranges object
//    var min = ranges[ind][0].charCodeAt(0),                           // get the minimum char code allowed for this range
//         max = ranges[ind][1].charCodeAt(0);                           // get the maximum char code allowed for this range
//    var c = Math.floor(Math.random() * (max - min + 1)) + min;        // get a random char code between min and max
//    str += String.fromCharCode(c);                                    // convert it back into a character and append it to the string str
//   }
//   return str;                                                         // return str
// }

// console.log(rand(20, ["a", "f"], ["A", "Z"], ["0", "9"]));

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
