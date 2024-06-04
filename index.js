

const display = document.getElementById("display");

function appendNumToDisplay(input) {
    if (display.value == "Error" || display.value == "Zero Devision" || display.value == "undefined") {
        display.value = "";
    }
    display.value += input;
}

function appendOperatorToDisplay(input) {
    if (display.value == "" || display.value == "Error" || display.value == "Zero Devision" || display.value == "undefined") {
        display.value = "";
        return;
    }
    display.value += " "  + input + " ";
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        val = eval(display.value);
        if (val == "Infinity") {
            display.value = "Zero Devision";
            return;
        }
        display.value = eval(display.value);
    } catch(error) {
        display.value = "Error";
    }
    console.log("calc done");
}