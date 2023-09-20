//richiesta dei dati
var requestURL = "https://api.exchangerate.host/latest";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
    let rates = request.response.rates;
    let from = document.getElementById("from");
    let to = document.getElementById("containerTo");
    for (let key in rates) {
        if (rates.hasOwnProperty(key)) {
            //aggiunta di una valuta al dropdown
            let option = document.createElement("option");
            option.value = rates[key];
            option.text = key;
            from.appendChild(option);
        }
    }
    to.appendChild(from.cloneNode(true)).id = "to";
};