let billAmount = document.getElementById("billAmountInput");

let billAmountButton = document.getElementById("billAmountButton");

let divTwo = document.getElementById("divTwo")

let cashGiven = document.getElementById("cashGivenInput");

let cashGivenButton = document.getElementById("cashGivenButton");

let result = document.getElementById("result");

let noReturn = document.getElementById("noReturn");

let notesCol = document.getElementsByClassName("noOfNotes");

const validCurrencies = [1, 5, 10, 20, 100, 500, 2000];

billAmountButton.addEventListener("click", () => {
    let amount = Number(billAmount.value);
    if (amount < 1) {
        alert("Not a valid Amount. Enter a amount greater than 1");
    }
    else {
        divTwo.style.display = "block";
    }
});

cashGivenButton.addEventListener("click", () => {
    let cash = Number(cashGiven.value);
    let amount = Number(billAmount.value);
    let balance = Number(cash - amount);
    if (cash < amount) {
        alert("Amount > Cash")
    }
    else if(cash === amount){
        noReturn.style.display = "block";
    }
    else {
        result.style.display = "block";
        for (let i = validCurrencies.length-1; i >=0; i--) {
            if (balance >= validCurrencies[i]) {
                let notes = Math.floor((balance / validCurrencies[i]));
                notesCol[i].innerText = notes;
                balance = balance - (notes*validCurrencies[i]);
            }
            else{
                notesCol[i].innerText = "";
            }
        }
    }
})