// Assignment Code
// var generateBtn = document.querySelector("#generate");
var inputLength = document.querySelector('input[name="length"]');
var smallLetter = document.querySelector('input[name="lowercase"]');
var bigLetter = document.querySelector('input[name="uppercase"]');
var num = document.querySelector('input[name="numbers"]');
var sym = document.querySelector('input[name="symbol"]');
var generate = document.getElementById("generate");
var copy = document.getElementById("copy");

const passKeys = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
};

//Copy text function
function clipboardFunction() {
  var copyText = document.querySelector("#password");

  copyText.select();
  copyText.setSelectionRange(0,99999)
  
  document.execCommand("copy");

  alert("Your password: " + copyText.value + " has been copied to your clipboard!")
}

// Add event listener to generate button
generate.addEventListener("click", () => {
  var length = +inputLength.value;
  var activeLower = smallLetter.checked;
  var activeUpper = bigLetter.checked;
  var activeNumber = num.checked;
  var activeSymbol = sym.checked;

  generatePassword(activeLower, activeUpper, activeNumber, activeSymbol, length);
});

// Write password to the #password input
// function writePassword(lower, ) {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

function generatePassword(lower, upper, num, sym, length){
  let main = "";
  let finalPassword = "";

  const passOptions = {
    lowercase: lower,
    uppercase: upper,
    number: num,
    symbol: sym
  };

  for(i=0; i<Object.keys(passOptions).length;i++){
    main += (Object.values(passOptions)[i]) ? 
    passKeys[Object.keys(passOptions)[i]] : "";
  }

  if(main != "" && length>0){
    for(i=0; i<length; i++){
      finalPassword += main[Math.floor(Math.random() * main.length)];
    }

    document.querySelector("#password").value = finalPassword;
  }else{
    document.querySelector("#password").value = "Select from the password options and specify character length";
  }

}





