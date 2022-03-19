// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var passLength = prompt("Please enter the length of the Password (min 8, max 128)");

  // Password validation to chech if value is withing range and not null
  if(passLength == 0 || passLength == null || passLength == ""){
    alert("Invalid value, try again")
      return null;

  }else{
    if(passLength < 8){
      alert("Character Length too short, try again");
      return null;

    }
    if(passLength > 128){
      alert("Character length too long, try again");
      return null;

    }
  }

  //Boolean options (might not need)
  var addLowercase = false;
  var addUppercase = false;
  var addNumeric = false;
  var addSpecial = false;

  //Array and length to hold the options
  var passOptions = [];
  var numOptions = 0;

  if(confirm("Do you want to add lowercase characters?")){
    addLowercase = true;
    passOptions[numOptions] = "lower";
    numOptions++;
  }
  if(confirm("Do you want to add uppercase characters?")){
    addUppercase = true;
    passOptions[numOptions] = "upper";
    numOptions++;
  }
  if(confirm("Do you want to add numbers?")){
    addNumeric = true;
    passOptions[numOptions] = "numbers";
    numOptions++;
  }
  if(confirm("Do you want to add special characters?")){
    addSpecial = true;
    passOptions[numOptions] = "special";
    numOptions++;
  }

  console.log(passOptions);
  console.log(numOptions);

  //Making sure one option is selected
  if(numOptions === 0){
    alert("You must select at least one option");
    return null;
  }

  //Variables to add to the password;
  var password = "";

  //Variables to put in password
  //TODO: Replace variables wit something more dynamic
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUFWXYZ";
  //var numChars = 1234567890;
  var specialChars = "!@#$%^&*()~";

 while(passLength > 0){

  console.log(passOptions[getRandomInt(numOptions)]);

  switch(passOptions[getRandomInt(numOptions)]){
    case "lower":
      password += lowerCase.charAt(getRandomInt(lowerCase.length));
      break;
    case "upper":
      password += upperCase.charAt(getRandomInt(upperCase.length));
      break;
    case "numbers":
      password += getRandomInt(10);
      break;
    case "special":
      password += specialChars.charAt(getRandomInt(specialChars.length));
      break;
  }

  passLength--;
 }



  return password;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
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
