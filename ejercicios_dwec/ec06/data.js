
var equip_ciclista = {
    team: "alfa-lum-1984",
    ciclistes: [{
        nom: "Juan Alonso",
        born: "8/01/1958",
        height: 1.92,
        tours: 0,
        wins: 12,
    },
        {
            nom: "Josh Pantano",
            born: "25/10/2000",
            height: 1.84,
            tours: 3,
            wins: 12,
        },
        {
            nom: "Bid Seville",
            born: "12/07/1993",
            height: 1.88,
            tours: 3,
            wins: 3
        },
        {
            nom: "Zolz Brucker",
            born: "08/09/1984",
            height: 1.72,
            tours: 0,
            wins: 1,
        },
        {
            nom: "Otto Verdes",
            born: "19/2/1979",
            height: 1.92,
            tours: 0,
            wins: 12,
        },
        {
            nom: "Bert Poel",
            born: "03/06/1995",
            height: 1.99,
            tours: 1,
            wins: 2,
        },
    ],
}

var uno = document.getElementById("uno");
var dos= document.getElementById("dos");
var tres= document.getElementById("tres");
var cuatro= document.getElementById("cuatro");
var cinco= document.getElementById("cinco");
var seis= document.getElementById("seis");
var siete= document.getElementById("siete");
var ocho= document.getElementById("ocho");
var nueve= document.getElementById("nueve");
var resultado= document.getElementById("resultado");


//Imprimeix els noms dels ciclistes, segons l’ordre natural de l’array. Resultat:
uno.addEventListener('click', function (){
let ciclista = equip_ciclista.ciclistes.map(nombre => nombre.nom);
    console.log (ciclista);

    resultado.innerHTML = ciclista.join(",");
})
//imprimeix noms ordenats alfabèticament  Imprimeix els noms dels ciclistes ordenats alfabèticament. Resultat:
dos.addEventListener("click", function (){
    let ciclista = equip_ciclista.ciclistes.sort((a, b) => a.nom.localeCompare(b.nom)).map(nombre => nombre.nom);
    resultado.innerHTML = ciclista.join(",");
})

//imprimeix noms ordenats per altura  Ordena i després treu la llista dels noms ordenada per altura, dels més alts als més baixos. Resultat:
tres.addEventListener("click", function (){
    let ciclista = equip_ciclista.ciclistes.sort((a, b) => b.height - a.height).map(nombre => nombre.nom);
    resultado.innerHTML = ciclista.join(",");
})

//imprimeix noms de ciclistes de millor a pitjor  Ordena de pitjor a millor, tenint en compte que el millor ciclista
// és el que té més tours, i si empaten a tours, és millor el que té més wins. Imprimeix els noms ordenats i també
// el número de tours i de wins.
cuatro.addEventListener("click", function (){
    let ciclista = equip_ciclista.ciclistes.sort((a, b) => b.tours - a.tours || b.wins - a.wins)
        .map(nombre => `<p>${nombre.nom} y tiene ${nombre.tours} tours y ha ganado ${nombre.wins}</p>` );
    resultado.innerHTML = ciclista.join("");
})

//Empra map() per afegir un tour a tots els ciclistes
cinco.addEventListener("click", function (){
    let ciclista = equip_ciclista.ciclistes.map(tour => `<p>${tour.nom} y tiene ${tour.tours} tours y ahora tiene ${tour.tours+1} </p>`);
    resultado.innerHTML = ciclista.join("");

})

//Empra filter() per a eliminar tots els ciclistes menors de 30 anys
seis.addEventListener("click", function (){
    const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

    let ciclista = equip_ciclista.ciclistes.filter(age => getAge(age.born)<30 ).map(nombre => nombre.nom) ;
    resultado.innerHTML = ciclista.join(",");
})

//Empra find() per trobar el primer ciclista que té més de 30 anys
siete.addEventListener("click", function (){
    const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

    let ciclista = equip_ciclista.ciclistes.find(age => getAge(age.born)>30 ) ;

    resultado.innerHTML = JSON.stringify(ciclista);
})

//afegeix un ciclista a la posició 2 amb les següents dades:
// nom: "Josh Pantano",       born: "30/11/1995",       height: 1.88,     tours: 2,     wins: 9,
ocho.addEventListener("click", function (){
    let newCicl = {
        nom: "Josh Pantano",
        born: "30/11/1995",
        height: 1.88,
        tours: 2,
        wins: 9,
    }
  let ciclista =  equip_ciclista.ciclistes.splice(2, 0, newCicl);
    resultado.innerHTML = equip_ciclista.ciclistes.map(nombre => nombre.nom).join(",");

})

//imprimeix noms ordenats per edat  De més joves a més vells.
nueve.addEventListener("click", function (){
    const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

    let ciclista = equip_ciclista.ciclistes.sort(function(a,b) {
        return  getAge(a.born) < getAge(b.born)
    }).map(nombre => nombre.nom) ;

    resultado.innerHTML = ciclista.join(", ");
})

















