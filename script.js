// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Copy text function
function clipboardFunction() {
  var copyText = document.querySelector("#password");

  copyText.select();
  copyText.setSelectRange(0,99999)
  
  document.execCommand("copy");

  alert("Your password: " + copyText.value + " has been copied to your clipboard!")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
