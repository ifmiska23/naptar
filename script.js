let elozo = document.createElement("button");
elozo.innerText = "Előző hónap";
let ido = document.createElement("span");
var ev = 2024
var honap = 11;
ido.innerText = ev +"." + honap +"." + " hónap";
let kovetkezo = document.createElement("button");
kovetkezo.innerText = "Következő hónap";
const fejlec = document.getElementById("fejlec");
let naptar = document.getElementById("naptar");
fejlec.appendChild(elozo)
fejlec.appendChild(ido)
fejlec.appendChild(kovetkezo)
const idő = [31,28,31,30,31,30,31,31,30,31,30,31];
const napok = ["H","K","Sz","Cs","P","Sz","V"]
for (let i = 1; i <31 ; i++){
    for (let j = 0; j<7 ; j++){
        let nap = document.createElement("span");
        var sor = document.createElement("div");
        nap.innerText = i;
        sor.appendChild(nap);
        if (i == 1){
            nap.id = "elsonap"
        }
    }
    naptar.appendChild(sor);

}
elozo.addEventListener("click", function(){
    if (honap == 1){
        honap = 12;
        ev = ev-1;
        ido.innerText = ev +"." + honap +"." + " hónap";
    }
    else{
        honap = honap-1
        ido.innerText = ev +"." + honap +"." + " hónap";
    }
    naptar.innerHTML = ""
    for (let i = 0; i<napok.length; i++){
        let het = document.createElement('span');
        het.innerText=napok[i];
        naptar.appendChild(het);
    }
    for (let i = 1; i <idő[honap-1]+1 ; i++){
        for (let j = 0; j<7 ; j++){
            let nap = document.createElement("span");
            var sor = document.createElement("div");
            nap.innerText = i;
            sor.appendChild(nap);
            if (i == 1){
                nap.id = "elsonap"
            }
        }
        naptar.appendChild(sor);
    
    }


})
kovetkezo.addEventListener('click', function(){
    if (honap == 12){
        ev ++;
        honap = 1;
        ido.innerText = ev +"." + honap +"." + " hónap";
    }
    else{
        honap ++;
        ido.innerText = ev +"." + honap +"." + " hónap";
    }
    naptar.innerHTML = ""
    for (let i = 0; i<napok.length; i++){
        let het = document.createElement('span');
        het.innerText=napok[i];
        naptar.appendChild(het);
    }
    for (let i = 1; i <idő[honap-1]+1 ; i++){
        for (let j = 0; j<7 ; j++){
            let nap = document.createElement("span");
            var sor = document.createElement("div");
            nap.innerText = i;
            sor.appendChild(nap);
            if (i == 1){
                nap.id = "elsonap"
            }
        }
        naptar.appendChild(sor);
    
    }
})
