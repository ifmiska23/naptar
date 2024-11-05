let elozo = document.createElement("button");
elozo.innerText = "Előző hónap";

let ido = document.createElement("span");
ido.innerText = "2024. 11. hónap";

let kovetkezo = document.createElement("button");
kovetkezo.innerText = "Következő hónap";

const fejlec = document.getElementById("fejlec");
let naptar = document.getElementById("naptar");

fejlec.appendChild(elozo)
fejlec.appendChild(ido)
fejlec.appendChild(kovetkezo)
for (let i = 1; i <31 ; i++){
    for (let j = 0; j<7 ; j++){
        let nap = document.createElement("button");
        var sor = document.createElement("div");
        nap.innerText = i;
        nap.id="gombok"
        sor.appendChild(nap);
    }
    naptar.appendChild(sor);
}
