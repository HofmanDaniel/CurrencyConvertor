function convert(amount, from, to) {
    if (from.text === "EUR") {
        return (amount * to.value).toFixed(2);
    } else {
        return ((amount / from.value) * to.value).toFixed(2);
    }
}

function update() {
    var amount = document.getElementById("amount").value;
    var getFrom = document.getElementById("from");
    var from = getFrom.options[getFrom.selectedIndex];
    var getTo = document.getElementById("to");
    var to = getTo.options[getTo.selectedIndex];
    document.getElementById('ris').innerHTML = convert(amount, from, to);
}

update()