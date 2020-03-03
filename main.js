let Currency = prompt("Please choose your currency! Type VND or USD")
let Exchangerate = 23000;
let Amount = 0;
let result = 0;

//VND to USD

function vndTOusd() {
    result = Amount / Exchangerate;
    console.log(formatCurrency("VND", Amount), "euqals to ", formatCurrency("USD", result));
}

//USD to VND

function usdTOvnd() {
    result = Amount * Exchangerate;
    console.log(formatCurrency("USD", Amount), "euqals to ", formatCurrency("VND", result));
}

//Functions

function invalidnumberVND() {
    Amount = prompt("How much is that?");
    if (Amount >= 0) {
        vndTOusd();
    } else {
        alert("Please input a valid number");
        invalidnumberVND()
    }
}

function invalidnumberUSD() {
    Amount = prompt("How much is that?");
    if (Amount >= 0) {
        usdTOvnd();
    } else {
        alert("Please input a valid number");
        invalidnumberUSD()
    }
}

function invalidcurrency() {
    Currency = prompt("The input currency is invalid. Please try again: VND or USD!");
    if (Currency.toUpperCase() === "VND") {
        invalidnumberVND();
    } else {
        if (Currency.toUpperCase() === "USD") { invalidnumberUSD(); } else {
            invalidcurrency()
        }
    }
}

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat("VND", {
        currency: type,
        style: "currency"
    });
    return formatter.format(value);
}

// if else statement

if (Currency.toUpperCase() === "VND") {
    invalidnumberVND()
} else {
    if (Currency.toUpperCase() === "USD") { invalidnumberUSD() } else { invalidcurrency() }
}