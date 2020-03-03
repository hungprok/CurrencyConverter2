let amountInput = document.getElementById('amount');
let convertButton = document.getElementById('convertButton')
let result = document.getElementById('result');


var VND = {
    USD: 1 / 23000,
    EUR: 1 / 25800,
    JPY: 4.65 / 1000,
    VND: 1
};

var USD = {
    VND: 23000,
    EUR: 23000 / 25800,
    JPY: 108,
    USD: 1
};

var EUR = {
    USD: 25800 / 23000,
    VND: 25800,
    JPY: 120,
    EUR: 1
};

var JPY = {
    VND: 1000 / 4.65,
    EUR: 1 / 120,
    USD: 1 / 108,
    JPY: 1
};
var currencies = {
    VND,
    USD,
    EUR,
    JPY
};

function getConversionRate(from, to) {
    return currencies[from][to];
}

function getConversionRate(from, to) {
    console.log(from, to);
    return currencies[from][to];
}

function convertAgain() {
    console.log("Hung ");
    let userChoice1 = document.getElementById("from").value;
    let userChoice2 = document.getElementById("to").value;
    amount = amountInput.value;
    if (amount >= 0) {
        conversionRate = getConversionRate(userChoice1, userChoice2);
        console.log(conversionRate);
        convertedAmount = amount * conversionRate;
        let formattedAmount = formatCurrency(userChoice2, convertedAmount);
        document.getElementById("result").innerHTML = formattedAmount;
    } else {
        alert("Please input a valid number");
    }
}

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
        currency: type,
        style: "currency"
    });
    return formatter.format(value);
}