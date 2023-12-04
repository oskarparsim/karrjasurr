//Koodi kirjutas Johannes Tammerand

// Impordib JSON-faili, mis hoiab infot toodete kohta
import json from './tooted.json' assert {type: 'json'};

function lisaToode(toode) {
    // Otsib dokumendist div-elementi, mis hoiab tooteid
    var toodeteList = document.getElementsByClassName("tooted")[0];

    // Leiab toote pildi ja loob sellest HTML elemendi
    var pilt = document.createElement("IMG");
    pilt.src = "./images/tooted/" + toode.pildiNimi;
    pilt.alt = toode.nimi;
    pilt.style = "border-radius:17px";

    // Loeb JSON-failist toote nime ja loob sellest HTML elemendi
    var tekst1 = document.createElement("p");
    var node1 = document.createTextNode(toode.nimi);
    tekst1.appendChild(node1);
    tekst1.className = "nimetus";

    // Loeb JSON-failist toote hinna ja loob sellest HTML elemendi
    var tekst2 = document.createElement("p");
    var node2 = document.createTextNode(toode.hind + '€');
    tekst2.appendChild(node2);
    tekst2.className = "hind";

    // Loob uue toodet kirjeldava div-elemendi, mille külge kinnitab eelnevalt loodud elemendid
    var toodeObj = document.createElement("div");
    toodeObj.className = "toode";
    toodeObj.appendChild(pilt);
    toodeObj.appendChild(tekst1);
    toodeObj.appendChild(tekst2);

    // Kinnitab eelnevalt loodud elemendi div-i külge, mis hoiab tooteid
    toodeteList.appendChild(toodeObj);
}

// Käivitab funktsiooni lehe laadimisel
window.onload = function(){
    var tooted = json.tooted;
    
    // Käib läbi JSON-failist, et tooteid luuua
    tooted.forEach(lisaToode);
}