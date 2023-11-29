let passwordStregthpara = document.querySelector("#passwordStregthpara");
let passCheckerNumberEl = document.querySelector("#PassCheckerNumber");
let passCheckerLowerEl = document.querySelector("#PassCheckerLower");
let passCheckerUpperEl = document.querySelector("#PassCheckerUpper");
let passCheckerCharEl = document.querySelector("#PassCheckerChar");
let passCheckerRepeatEl = document.querySelector("#PassCheckerRepeat");
let passCheckerLengthtEl = document.querySelector("#PassCheckerLength");

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

    

    if(hasNumber){
        passCheckerNumberEl.innerHTML = "<span class=\"passColor passStronge\">Pass</span>"
    }else{
        passCheckerNumberEl.innerHTML = "<span class=\"passColor passWeak\">Fail</span>"
    }

    if(hasUpperCase){
        passCheckerUpperEl.innerHTML = "<span class=\"passColor passStronge\">Pass</span>"
    }else{
        passCheckerUpperEl.innerHTML = "<span class=\"passColor passWeak\">Fail</span>"
    }

    if(hasLowerCase){
        passCheckerLowerEl.innerHTML = "<span class=\"passColor passStronge\">Pass</span>"
    }else{
        passCheckerLowerEl.innerHTML = "<span class=\"passColor passWeak\">Fail</span>"
    }

    if(hasSpecialChar){
        passCheckerCharEl.innerHTML = "<span class=\"passColor passStronge\">Pass</span>"
    }else{
        passCheckerCharEl.innerHTML = "<span class=\"passColor passWeak\">Fail</span>"
    }

    if(hasGoodLength){
        passCheckerLengthtEl.innerHTML = "<span class=\"passColor passStronge\">Pass</span>"
    }else{
        passCheckerLengthtEl.innerHTML = "<span class=\"passColor passWeak\">Fail</span>"
    }

    if(hasRepeater){
        passCheckerRepeatEl.innerHTML = "<span class=\"passColor passWeak\">Fail</span>"
    }else{
        passCheckerRepeatEl.innerHTML = "<span class=\"passColor passStronge\">Pass</span>"
    }

    if(passwordStrength > 4){
        passwordStregthpara.innerHTML = "Password Strength: <span class=\"passColor passStronge\"> Strong Password</span>";
    }else if(passwordStrength > 3){
        passwordStregthpara.innerHTML = "Password Strength: <span class=\"passColor passmedium\"> Medium Password</span>";
    }else{
        passwordStregthpara.innerHTML = "Password Strength: <span class=\"passColor passWeak\"> Weak Password</span>";
    }
}