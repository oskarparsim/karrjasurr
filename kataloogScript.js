import json from './tooted.json' assert {type: 'json'};

function lisaToode(toode) {
    var toodeteList = document.getElementsByClassName("tooted")[0];

    var pilt = document.createElement("IMG");
    pilt.src = "./images/tooted/" + toode.pildiNimi;
    pilt.alt = toode.nimi;

    var tekst1 = document.createElement("p");
    var node1 = document.createTextNode(toode.nimi);
    tekst1.appendChild(node1);
    tekst1.className = "nimetus";

    var tekst2 = document.createElement("p");
    var node2 = document.createTextNode(toode.hind + '€');
    tekst2.appendChild(node2);
    tekst2.className = "hind";

    var toodeObj = document.createElement("div");
    toodeObj.className = "toode";
    toodeObj.appendChild(pilt);
    toodeObj.appendChild(tekst1);
    toodeObj.appendChild(tekst2);

    toodeteList.appendChild(toodeObj);
}

window.onload = function(){
    var tooted = json.tooted;
    tooted.forEach(lisaToode);
}