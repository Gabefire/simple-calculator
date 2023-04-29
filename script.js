
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

function getPercent () {
    finalNum = Number(display.textContent) / 100;
    display.textContent = finalNum
}

function getNegative () {
    finalNum = -1 * Number(display.textContent)
    display.textContent = finalNum
}
// diplay function
function getDisplay () {
    if (e.target.id !== "." && displayStr === "0") {displayStr = ""}
    if (e.target.id === "." && displayStr === "") {displayStr = "0"}
    displayStr += e.target.id
    toggleDecimalBtn(displayStr)
    display.textContent = displayStr
    }

// toggles decimal button depending
function toggleDecimalBtn(str) {
    if (str.includes(".") || str.length === 0) {
        document.getElementById(".").disabled = true
    } else {
        document.getElementById(".").disabled = false
    }
}

// clear value and store value

function storeDisplayValue () {
    num1 = Number(display.textContent)
}

function clearButton () {
    document.getElementById(".").disabled = false
    if (num1 === "") {
        display.textContent = "0";
    } 
    else if (display.textContent === "0") {
        return;
    }
    else if (display.textContent === "") {
        display.textContent = "0"
        num1 = ""
    }
    else if (num3 !== "") {
        display.textContent = "0"
        num1 = ""
        num2 = ""
        num3 = ""
    }
    else {
        display.textContent = ""
    }
}



function evaluateNums () { 
    if (num1 === "" || functionOp === "" || display.textContent === "" ||
        num3 !== "") {return;}
    let num2 = Number(display.textContent)
    switch (functionOp) {
        case "add":
            num3 = addNums(num1, num2);
            display.textContent = num3;
            num1 = display.textContent;
            break;
        case "subtract":
            num3 = subtractNums(num1, num2);
            display.textContent = num3;
            num1 = display.textContent;
            break;
        case "multiply":
            num3 = multiplyNums(num1, num2);
            display.textContent = num3;
            num1 = display.textContent;
            break;
        case "divide":
            num3 = divideNums(num1, num2);
            display.textContent = num3;
            num1 = display.textContent;
            break;
    }

}
/* variable declarations */
let num1 = ""
let num2 = ""
let num3 = ""
let functionOp = ""  
let displayStr = "0"

/* display */
let display = document.querySelector('.display')
nums = document.querySelectorAll('.number')
display.textContent = "0"
nums.forEach((num) => {
    num.addEventListener('click', (e) => {
    if (display.textContent.length === 21) {return;}
    if (num3 !== "") {return;}
    if (num1 !== "" && displayStr.length === 0) {
        display.textContent = "";
        displayStr = "";}
    displayStr = display.textContent    
    if (e.target.id !== "." && displayStr === "0") {displayStr = ""}
    if (e.target.id === "." && displayStr === "") {displayStr = "0"}
    displayStr += e.target.id
    toggleDecimalBtn(displayStr)
    display.textContent = displayStr
    })
})

/* Event Listeners */
let clear = document.querySelector(".clear")
clear.addEventListener('click', clearButton)

let equal = document.querySelector(".equal")
equal.addEventListener("click", evaluateNums)

let functions =  document.querySelectorAll(".op")
functions.forEach((func) => {
    func.addEventListener ("click", function(event) {
        functionOp = event.target.id
        displayStr = ""
        num3 = ""
        document.getElementById(".").disabled = false
        storeDisplayValue()
        
    })
})

let negative = document.querySelector("#negative")
negative.addEventListener("click", getNegative)

let percent = document.querySelector("#percent")
percent.addEventListener("click", getPercent)