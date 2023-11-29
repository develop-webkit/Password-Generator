const passwordCheckerEl = {
    passwordStregthpara:"",
    passCheckerNumberEl:"",
    passCheckerLowerEl:"",
    passCheckerUpperEl:"",
    passCheckerCharEl:"",
    passCheckerRepeatEl:"",
    passCheckerLengthtEl:""
}

passwordCheckerEl.passwordStregthpara = document.querySelector("#passwordStregthpara");
passwordCheckerEl.passCheckerNumberEl = document.querySelector("#PassCheckerNumber");
passwordCheckerEl.passCheckerLowerEl = document.querySelector("#PassCheckerLower");
passwordCheckerEl.passCheckerUpperEl = document.querySelector("#PassCheckerUpper");
passwordCheckerEl.passCheckerCharEl = document.querySelector("#PassCheckerChar");
passwordCheckerEl.passCheckerRepeatEl = document.querySelector("#PassCheckerRepeat");
passwordCheckerEl.passCheckerLengthtEl = document.querySelector("#PassCheckerLength");

let CharPattern = /\!|\@|\#|\%|\&|\|\(|\^|\*|\(|\)|\-|\+|\_|\=|\?|\>|\<|\,|\;\:|\"|\{|\}|\[|\]|\'|\/|\.|\`|\~/;
let upperCasePattern = /[A-Z]/;
let lowerCasePattern = /[a-z]/;
let numberPattern = /[0-9]/;


const passwordStrength = {
    strengthLevel:0,
    hasNumber:false,
    hasUpperCase:false, 
    hasLowerCase:false, 
    hasSpecialChar:false, 
    hasGoodLength:false, 
    hasRepeater:false,

} 

function passwordChecker(){
    let passwordTest = document.querySelector("#passwordInput").value;

    passwordStrength.hasNumber = false;
    passwordStrength.hasUpperCase = false;
    passwordStrength.hasLowerCase = false;
    passwordStrength.hasSpecialChar = false;
    passwordStrength.hasGoodLength = false;
    passwordStrength.hasRepeater = false;

    passwordStrength.hasNumber = paternchecker(numberPattern);

    passwordStrength.hasUpperCase = paternchecker(upperCasePattern);

    passwordStrength.hasSpecialChar = paternchecker(CharPattern);

    passwordStrength.hasLowerCase = paternchecker(lowerCasePattern);

    function paternchecker(paternPara){
        if(paternPara.test(passwordTest)){
            return true 
        }else{
            return false
        }
    }

    if(passwordTest.length > 12){
        passwordStrength.hasGoodLength = true;
    }

    for(let i = 1;i< passwordTest.length;i++){
        if( passwordTest.charAt(i-1) === passwordTest.charAt(i) && passwordTest.charAt(i) === passwordTest.charAt(i+1)){
            passwordStrength.hasRepeater = true;
        }
    }
    passwordStrength.strengthLevel =  passwordStrength.hasNumber + passwordStrength.hasUpperCase + passwordStrength.hasLowerCase + passwordStrength.hasSpecialChar + passwordStrength.hasGoodLength - passwordStrength.hasRepeater;


    if(passwordStrength.hasNumber){
        passwordCheckerEl.passCheckerNumberEl.innerHTML = "<span class=\"passColor passStronge\">Pass</span>"
    }else{
        passwordCheckerEl.passCheckerNumberEl.innerHTML = "<span class=\"passColor passWeak\">Fail</span>"
    }

    if(passwordStrength.hasUpperCase){
        passwordCheckerEl.passCheckerUpperEl.innerHTML = "<span class=\"passColor passStronge\">Pass</span>"
    }else{
        passwordCheckerEl.passCheckerUpperEl.innerHTML = "<span class=\"passColor passWeak\">Fail</span>"
    }

    if(passwordStrength.hasLowerCase){
        passwordCheckerEl.passCheckerLowerEl.innerHTML = "<span class=\"passColor passStronge\">Pass</span>"
    }else{
        passwordCheckerEl.passCheckerLowerEl.innerHTML = "<span class=\"passColor passWeak\">Fail</span>"
    }

    if(passwordStrength.hasSpecialChar){
        passwordCheckerEl.passCheckerCharEl.innerHTML = "<span class=\"passColor passStronge\">Pass</span>"
    }else{
        passwordCheckerEl.passCheckerCharEl.innerHTML = "<span class=\"passColor passWeak\">Fail</span>"
    }

    if(passwordStrength.hasGoodLength){
        passwordCheckerEl.passCheckerLengthtEl.innerHTML = "<span class=\"passColor passStronge\">Pass</span>"
    }else{
        passwordCheckerEl.passCheckerLengthtEl.innerHTML = "<span class=\"passColor passWeak\">Fail</span>"
    }

    if(passwordStrength.hasRepeater){
        passwordCheckerEl.passCheckerRepeatEl.innerHTML = "<span class=\"passColor passWeak\">Fail</span>"
    }else{
        passwordCheckerEl.passCheckerRepeatEl.innerHTML = "<span class=\"passColor passStronge\">Pass</span>"
    }

    if(passwordStrength.strengthLevel > 4){
        passwordCheckerEl.passwordStregthpara.innerHTML = "Password Strength: <span class=\"passColor passStronge\"> Strong Password</span>";
    }else if(passwordStrength.strengthLevel > 3){
        passwordCheckerEl.passwordStregthpara.innerHTML = "Password Strength: <span class=\"passColor passmedium\"> Medium Password</span>";
    }else{
        passwordCheckerEl.passwordStregthpara.innerHTML = "Password Strength: <span class=\"passColor passWeak\"> Weak Password</span>";
    }
}