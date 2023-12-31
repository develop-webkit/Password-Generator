const passwordCheckerEl = {
    passwordStregthpara:"",
    passCheckerNumberEl:"",
    passCheckerLowerEl:"",
    passCheckerUpperEl:"",
    passCheckerCharEl:"",
    passCheckerRepeatEl:"",
    passCheckerLengthtEl:""
}

let rangeNumberEl = document.querySelector("#rangeNumber");
let rangSliderEl = document.querySelector("#rangeSlider");
let uppercaseCheckEl = document.querySelector("#uppercaseCheck");
let lowercaseCheckEl = document.querySelector("#lowercaseCheck");
let numberCheckEl = document.querySelector("#numberCheck");
let symbolCheckEl = document.querySelector("#symbolsCheck");
let passwordTest = document.querySelector("#passwordInput");

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

function copyPass(){
    if(passwordTest.length){
        navigator.clipboard.writeText(passwordTest);
    }
}

function rangeNumberChange(){
    rangSliderEl.value = rangeNumberEl.value;
    passwordGenerator();
}

function rangeSliderChange(){
    rangeNumberEl.value = rangSliderEl.value;
    passwordGenerator();
}

function checkboxChange(){
    if((uppercaseCheckEl.checked + lowercaseCheckEl.checked + numberCheckEl.checked + symbolCheckEl.checked) == 1){
        document.querySelector(".checkLabelBlock input[type='checkbox']:checked").setAttribute("disabled","disabled"); 
    }else{
        document.querySelectorAll(".checkLabelBlock input[type='checkbox']:checked").forEach((item) => {
            item.removeAttribute("disabled");
        });
    }
    passwordGenerator()
}

passwordCheckerEl.passwordStregthpara = document.querySelector("#passwordStregthpara");
passwordCheckerEl.passCheckerNumberEl = document.querySelector("#PassCheckerNumber");
passwordCheckerEl.passCheckerLowerEl = document.querySelector("#PassCheckerLower");
passwordCheckerEl.passCheckerUpperEl = document.querySelector("#PassCheckerUpper");
passwordCheckerEl.passCheckerCharEl = document.querySelector("#PassCheckerChar");
passwordCheckerEl.passCheckerRepeatEl = document.querySelector("#PassCheckerRepeat");
passwordCheckerEl.passCheckerLengthtEl = document.querySelector("#PassCheckerLength");


function passwordGenerator(){
    let passwordTestLocal = "";
    
    while(passwordTestLocal.length < rangeNumberEl.value){
        switch(Math.ceil(Math.random() * 4)){
            case 1:
                if(lowercaseCheckEl.checked){
                    passwordTestLocal+= randomLower();
                }
            break;
            case 2:
                if(uppercaseCheckEl.checked){
                    passwordTestLocal+= randomUpper();
                }
            break;
            case 3:
                if(numberCheckEl.checked){
                    passwordTestLocal+= randomNumber();
                }
            break;
            case 4:
                if(symbolCheckEl.checked){
                    passwordTestLocal+= randomChar();
                }
            break;
        } 
    }
    passwordChecker(passwordTestLocal);
}

function randomLower(){
    let lowerCaseList = "abcdefghijklmnopqrstuvwxyz"
    return lowerCaseList.charAt( Math.floor(Math.random() * 26) );
}

function randomUpper(){
    let upperCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return upperCaseList.charAt( Math.floor(Math.random() * 26) )
}

function randomNumber(){
    return randomNumberGenerated = Math.floor(Math.random() * 10);
}

function randomChar(){
    let charList = "(!@#$%^&*(_-=`~[]{}|;'<>?,./+)"
    return charList.charAt( Math.floor( Math.random() * 30 ) )
}

function passwordChecker(passwordTestLocal){
    if(passwordTestLocal.length){
        passwordTest = passwordTestLocal;
        document.querySelector("#passwordInput").value = passwordTestLocal;
    }else{
        passwordTest = document.querySelector("#passwordInput").value; 
    }

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

    if(passwordTest.length > 11){
        passwordStrength.hasGoodLength = true;
    }

    for(let i = 1;i< passwordTest.length;i++){
        if( passwordTest.charAt(i-1) === passwordTest.charAt(i) && passwordTest.charAt(i) === passwordTest.charAt(i+1)){
            passwordStrength.hasRepeater = true;
        }
    }
    passwordStrength.strengthLevel =  passwordStrength.hasNumber + passwordStrength.hasUpperCase + passwordStrength.hasLowerCase + passwordStrength.hasSpecialChar + passwordStrength.hasGoodLength - passwordStrength.hasRepeater;

    function strengthCheckPass(strengthConidtionBool,strengthConidtionPara){
        if(strengthConidtionBool){
            strengthConidtionPara.innerHTML = "<span class=\"passColor passStrong\">Pass</span>"
        }else{
            strengthConidtionPara.innerHTML = "<span class=\"passColor passWeak\">Fail</span>"
        }
    }

    function strengthCheckFail(strengthConidtionBool,strengthConidtionPara){
        if(strengthConidtionBool){
            strengthConidtionPara.innerHTML = "<span class=\"passColor passWeak\">Fail</span>"
        }else{
            strengthConidtionPara.innerHTML = "<span class=\"passColor passStrong\">Pass</span>"
        }
    }

    strengthCheckPass(passwordStrength.hasNumber,passwordCheckerEl.passCheckerNumberEl);
    strengthCheckPass(passwordStrength.hasUpperCase,passwordCheckerEl.passCheckerUpperEl);
    strengthCheckPass(passwordStrength.hasLowerCase,passwordCheckerEl.passCheckerLowerEl);
    strengthCheckPass(passwordStrength.hasSpecialChar,passwordCheckerEl.passCheckerCharEl);
    strengthCheckPass(passwordStrength.hasGoodLength,passwordCheckerEl.passCheckerLengthtEl);
    strengthCheckFail(passwordStrength.hasRepeater,passwordCheckerEl.passCheckerRepeatEl);

    switch(passwordStrength.strengthLevel ){
        case 1:
        case 2:
        case 3: 
            StrengthLevelChange("Weak");
        break;
        case 4:
            StrengthLevelChange("Medium");
        break;
        case 5:
            StrengthLevelChange("Strong");
        break;
    }

    function StrengthLevelChange(StrengthLevelAssignment ){
        passwordCheckerEl.passwordStregthpara.innerHTML = `Password Strength: <span class=\"passColor pass${StrengthLevelAssignment} \"> ${StrengthLevelAssignment} Password </span>`
    }
}