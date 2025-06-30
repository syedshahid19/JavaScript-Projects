const inputSlider = document.querySelector("[data-lengthSlider]");
const passwordLengthNumber = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck= document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[pwdStrength-indicator]");
const generateBtn = document.querySelector(".generate-button");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?/`~-=\\\"'";


let password = "";
let passwordLength = 10;
let checkCount = 0;
// set strength of circle to gray in default mode
handleSetIndicator("#ccc")

handleSlider();
// set password length
function handleSlider(){
    inputSlider.value = passwordLength;
    passwordLengthNumber.innerText = passwordLength;
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ( (passwordLength - min)*100/(max - min)) + "% 100%"
}

function handleSetIndicator(color){
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

function getRndInteger(min,max){
   return Math.floor(Math.random()*(max-min))+min;
}

function generateRandomNumber(){
    return getRndInteger(0, 9);
}

function generateLowerCase(){
    return String.fromCharCode(getRndInteger(97, 123));
}

function generateUpperCase(){
    return String.fromCharCode(getRndInteger(65, 91));
}

function generateSymbol(){
    const randNum = getRndInteger(0, symbols.length)
    return symbols.charAt(randNum);
}

function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasLower = true;
    if(numbersCheck.checked) hasNum = true;
    if(symbolsCheck.checked) hasSym = true;

    if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8){
        handleSetIndicator("#0f0")
    }else if((hasLower || hasUpper) &&
      (hasNum || hasSym) &&
      passwordLength >= 6){
        handleSetIndicator("#ff0")
    }else{
        handleSetIndicator("#f00");
    }
}


async function copyContent(){
   try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerHTML = "Copied"

   } catch (error) {
        copyMsg.innerHTML = "Copied"
   }

   copyMsg.classList.add("active");

   setTimeout(()=>{
    copyMsg.classList.remove("active");
   }, 2000)

}

function handleCheckboxChange(){
    checkCount = 0;
    allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked){
            checkCount++;
        }
    })

    // special case
    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach((checkbox)=>{
    checkbox.addEventListener("click", handleCheckboxChange);
})


function shufflePassword(array){
    for(let i=array.length-1; i>0; i--){
        const j = Math.floor(Math.random()*(i+1));
        const temp = array[i];
        array[i] = array[j];
        array[j]= temp;
    }
    let str = ""
    array.forEach((el)=> (str +=el));
    return str;
}


generateBtn.addEventListener("click", ()=>{

     if(passwordLength <= 0) return;

     if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }

    password = ""

    let funcArr = []

    if(uppercaseCheck.checked){
        funcArr.push(generateUpperCase);
    }

    if(lowercaseCheck.checked){
        funcArr.push(generateLowerCase);
    }

    if(numbersCheck.checked){
        funcArr.push(generateRandomNumber);
    }

    if(symbolsCheck.checked){
        funcArr.push(generateSymbol);
    }

    // compulsory addition 
    for(let i=0; i<funcArr.length; i++){
        password += funcArr[i]();
    }

    for(let i=0; i<passwordLength - funcArr.length ; i++){
        let randIndx = getRndInteger(0, funcArr.length);
        password += funcArr[randIndx]();
    }

    password = shufflePassword(Array.from(password));
    passwordDisplay.value = password;
    calcStrength();
 
})

inputSlider.addEventListener("input", (events)=>{
    passwordLength = events.target.value;
    handleSlider();
});

copyBtn.addEventListener("click", ()=>{
    if(passwordDisplay.value){
        copyContent();
    }
})