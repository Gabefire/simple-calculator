/* test */
getNewDisplay("0")

/* Operator Functions */

function addNums(num1, num2) {
    finalNum = num1 + num2;
    return finalNum;
}

function subtractNums (num1, num2) {
    finalNum = num1 - num2;
    return finalNum;
}

function divideNums (num1, num2) {
    finalNum = num1 / num2;
    return finalNum;
}

function multiplyNums (num1, num2) {
    finalNum = num1 * num2;
    return finalNum;
}

function getPercent (num) {
    finalNum = num / 100;
    return finalNum;
}

function getNegative (num) {
    finalNum = -1 * num
    return finalNum
}
// Display
// Make a blank string concat each input to string
// if string has a decimal in it disable decimal button
function getNewDisplay(str) {    
    display = document.querySelector('.display')
    display.textContent = str
    displayStr = display.textContent
    let nums = document.querySelectorAll('.number')
    nums.forEach((num) => {
        num.addEventListener('click', (e) => {
        if (e.target.textContent !== "." && displayStr === "0") {displayStr = ""}
        if (e.target.textContent === "." && displayStr === "") {displayStr = "0"}
        displayStr += e.target.textContent
        console.log(e)
        toggleDecimalBtn()
        display.textContent = displayStr
        })
    })
}

// toggles decimal button depending if it is in displayStr
function toggleDecimalBtn() {
    if (displayStr.includes(".") || displayStr.length === 0) {
        document.getElementById("decimal").disabled = true
    } else {
        document.getElementById("decimal").disabled = false
    }
}

// clear value and store value

function storeDisplayValue () {
    num1 = Number(displayStr)
    getNewDisplay("")
}

function clearButton () {
    if (num1 === "") {
        display.textContent = "0";
    } 
    else if (display.textContent === "0") {
        return;
    }
    else if (display.textContent === "") {
        num1 = ""
        getNewDisplay("")
    }
    }

//Operator Buttons
let num1 = ""
let num2 = ""
let functionOp = ""  


function getFunction () {
    let functions =  document.querySelectorAll(".op")
    functions.forEach((func) => {
        func.addEventListener ("click", (e) => {
            functionOp = e.target.id
        })
    })
}