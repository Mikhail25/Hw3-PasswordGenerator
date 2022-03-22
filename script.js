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


  //Array and length to hold the options
  var passOptions = [];
  var numOptions = 0;

  if(confirm("Do you want to add lowercase characters?")){
    passOptions[numOptions] = "lower";
    numOptions++;
  }
  if(confirm("Do you want to add uppercase characters?")){
    passOptions[numOptions] = "upper";
    numOptions++;
  }
  if(confirm("Do you want to add numbers?")){
    passOptions[numOptions] = "numbers";
    numOptions++;
  }
  if(confirm("Do you want to add special characters?")){
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
  var specialChars = "!@#$%^&*()~";


//Loop to ramdomly allocate characters from the char variables to the password variable
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

//Function to randomize whole integers
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
