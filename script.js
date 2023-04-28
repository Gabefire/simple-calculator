
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
    nums = document.querySelectorAll('.number')
    display.textContent = str
    nums.forEach((num) => {
        num.addEventListener('click', (e) => {
        let displayStr = display.textContent
        if (e.target.id !== "." && displayStr === "0") {displayStr = ""}
        if (e.target.id === "." && displayStr === "") {displayStr = "0"}
        displayStr += e.target.id
        toggleDecimalBtn(displayStr)
        display.textContent = displayStr
        return;
        })
    })
}

// toggles decimal button depending if it is in displayStr
function toggleDecimalBtn(str) {
    if (str.includes(".") || str.length === 0) {
        document.getElementById("decimal").disabled = true
    } else {
        document.getElementById("decimal").disabled = false
    }
}

// clear value and store value

function storeDisplayValue () {
    display = document.querySelector('.display')
    let num1 = Number(display.textContent)
    getNewDisplay("")
    return num1
}

function clearButton () {
    display = document.querySelector('.display')
    if (num1 === "") {
        display.textContent = "0";
    } 
    else if (display.textContent === "0") {
        return;
    }
    else {
        num1 = ""
        getNewDisplay("")
    }
    }

//Operator Buttons
function getFunction () {
    let functions =  document.querySelectorAll(".op")
    functions.forEach((func) => {
        func.addEventListener ("click", (e) => {
            if (num1 === "") {return;}
            else {
                functionOp = e.target.id
                storeDisplayValue()
            }
        })
    })
}

function evaluateNums (func) {
    display = document.querySelector('.display')
    num1 = storeDisplayValue()
    if (num1 === "" || func === "" || display.textContent === "") {return;}
    let num2 = display.textContent
    switch (func) {
        case "add":
            display.textContent = addNums(num1, num2);
            num1 = display.textContent;
            break;
        case "subtract":
            display.textContent = subtractNums(num1, num2);
            num1 = display.textContent;
            break;
        case "multiply":
            display.textContent = multiplyNums(num1, num2);
            num1 = display.textContent;
            break;
        case "divide":
            display.textContent = divideNums(num1, num2)
            num1 = display.textContent
            break;
    }

}
getNewDisplay("0")
let num1 = ""
let functionOp = ""  

let clear = document.querySelector(".clear")
clear.addEventListener('click', clearButton)

let equal = document.querySelector(".equal")
equal.addEventListener("click", evaluateNums(functionOp))

let functions =  document.querySelectorAll(".op")
functions.forEach((func) => {
    func.addEventListener ("click", (e) => {
        if (num1 === "") {return;}
        else {
            functionOp = e.target.id
            storeDisplayValue()
        }
    })
})