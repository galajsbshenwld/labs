function calculate() {
    let exchangeRate = parseFloat(document.getElementById("exchangeRate").value);
    let amount = parseFloat(document.getElementById("amount").value);
    if (isNaN(amount) && exchangeRate > 0) {
      return;
    } else if (isNaN(exchangeRate) || isNaN(amount) || exchangeRate <= 0 || amount <= 0) {
        alert("Please enter correct data!");
        return;
    }
    let result = (amount / exchangeRate).toFixed(2);
    document.getElementById("result").style.display = "block";
    document.getElementById("resultValue").innerText = result + " BTC";
}

function clearFields() {
    document.getElementById("exchangeRate").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("result").style.display = "none";
    document.getElementById("resultValue").innerText = "";
}
