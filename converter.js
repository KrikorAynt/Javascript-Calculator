let api_link = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";

async function getCurrencyLists(selector){
    let resp = await fetch(api_link);
    let listAll = await resp.json();

    let select = document.getElementById(selector);
    select.innerHTML = '<option value="" disabled selected>Select a currency</option>';

    for (let key in listAll) {
        if(listAll[key]){
            let option = document.createElement("option");
            option.value = key;                
            option.text = `${key} - ${listAll[key]}`;
            select.appendChild(option);
        }
    
    }

}
async function convert(){
    try {
        let fromCurr = document.getElementById("currency1").value;
        let toCurr = document.getElementById("currency2").value;
        let fromAmmt = parseFloat(document.getElementById("inNumber").value);

        let resp = await fetch(api_link.slice(0,(api_link.length-5))+"/"+fromCurr+".json");
        let listAll = await resp.json();
        let rate = parseFloat(listAll[fromCurr][toCurr]);
        let output = fromAmmt*rate;
        if(Number.isNaN(output)){
            throw error;
        }
        document.getElementById("outputConv").innerHTML = output.toFixed(2);
    }catch(error){
        document.getElementById("outputConv").innerHTML = "Invalid Inputs";
        console.error('Error fetching the currency list:', error);
    }
}
getCurrencyLists("currency1");
getCurrencyLists("currency2");