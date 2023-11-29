/* 
Length: Make your password at least 12 characters long, but 14 or more is better.
Characters: Include a combination of uppercase and lowercase letters, numbers, symbols, and punctuation.
Randomness: Avoid using memorable keypaths or personal information.
Uniqueness: Use words or phrases that are difficult to guess and connect to you. Don't reuse passwords across multiple accounts.
no more than 3 repeating characters
*/

let passwordTest = "NabeeL@123";
let hasNumber = 0;
let hasUpperCase = 0;
let hasLowerCase = 0;
let hasSpecialChar = 0
let hasGoodLength = 0
let hasRepeater = 0;
let passwordStrength = 0;
let CharPattern = /\!|\@|\#|\%|\&|\|\(|\^|\*|\(|\)|\-|\+|\_|\=|\?|\>|\<|\,|\;\:|\"|\{|\}|\[|\]|\'|\/|\.|\`|\~/;
let upperCasePattern = /[A-Z]/;
let lowerCasePattern = /[a-z]/;
let numberPattern = /[0-9]/;

hasNumber = passchecker(numberPattern);

hasUpperCase = passchecker(upperCasePattern);

hasSpecialChar = passchecker(CharPattern);

hasLowerCase = passchecker(lowerCasePattern);

function passchecker(paternPara){
    if(paternPara.test(passwordTest)){
        return 1 
    }
}

if(passwordTest.length > 7){
    hasGoodLength = 1;
}

if(){
    
}

passwordStrength = hasNumber + hasUpperCase + hasLowerCase + hasSpecialChar + hasGoodLength + hasRepeater

console.log(passwordStrength)

if(passwordStrength > 5){
    console.log("Strong Password");
}else if(passwordStrength > 3){
    console.log("Medium Password");
}else{
    console.log("Weak Password");
}