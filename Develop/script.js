// Assignment Code
var generateBtn = document.querySelector("#generate");
const randomUnicode = () => {
  const Unicode = [
    "U+2022",
    "U-2021",
    "U+2020"
    
];
return Unicode[Math.floor(Math.random() * Unicode.length)];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
