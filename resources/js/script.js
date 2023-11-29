/* 
Length: Make your password at least 12 characters long, but 14 or more is better.
Characters: Include a combination of uppercase and lowercase letters, numbers, symbols, and punctuation.
Randomness: Avoid using memorable keypaths or personal information.
Uniqueness: Use words or phrases that are difficult to guess and connect to you. Don't reuse passwords across multiple accounts.
no more than 3 repeating characters
*/

let passwordStregthpara = document.querySelector("#passwordStregthpara");
let passCheckerNumberEl = document.quertSelector("#PassCheckerNumber");
let passCheckerLowerEl = document.quertSelector("#PassCheckerLower");
let passCheckerUpperEl = document.quertSelector("#PassCheckerUpper");
let passCheckerCharEl = document.quertSelector("#PassCheckerChar");
let passCheckerRepeatEl = document.quertSelector("#PassCheckerRepeat");

let passwordStrength = 0;
let CharPattern = /\!|\@|\#|\%|\&|\|\(|\^|\*|\(|\)|\-|\+|\_|\=|\?|\>|\<|\,|\;\:|\"|\{|\}|\[|\]|\'|\/|\.|\`|\~/;
let upperCasePattern = /[A-Z]/;
let lowerCasePattern = /[a-z]/;
let numberPattern = /[0-9]/;

let hasNumber = false;
let hasUpperCase = false;
let hasLowerCase = false;
let hasSpecialChar = false;
let hasGoodLength = false;
let hasRepeater = false;

function passwordChecker(){
    let passwordTest = document.querySelector("#passwordInput").value;

    hasNumber = false;
    hasUpperCase = false;
    hasLowerCase = false;
    hasSpecialChar = false;
    hasGoodLength = false;
    hasRepeater = false;

    hasNumber = paternchecker(numberPattern);

    hasUpperCase = paternchecker(upperCasePattern);

    hasSpecialChar = paternchecker(CharPattern);

    hasLowerCase = paternchecker(lowerCasePattern);

    function paternchecker(paternPara){
        if(paternPara.test(passwordTest)){
            return true 
        }else{
            return false
        }
    }

    if(passwordTest.length > 12){
        hasGoodLength = true;
    }

    for(let i = 1;i< passwordTest.length;i++){
        if( passwordTest.charAt(i-1) === passwordTest.charAt(i) && passwordTest.charAt(i) === passwordTest.charAt(i+1)){
            hasRepeater = true;
        }
        console.log("repeat test")
    }
    passwordStrength =  hasNumber + hasUpperCase + hasLowerCase + hasSpecialChar + hasGoodLength - hasRepeater;


    console.log(passwordStrength)

    if(passwordStrength > 4){
        passwordStregthpara.innerHTML = "Password Strength: <span class=\"passColor passStronge\"> Strong Password</span>";
    }else if(passwordStrength > 3){
        passwordStregthpara.innerHTML = "Password Strength: <span class=\"passColor passmedium\"> Medium Password</span>";
    }else{
        passwordStregthpara.innerHTML = "Password Strength: <span class=\"passColor passWeak\"> Weak Password</span>";
    }
}