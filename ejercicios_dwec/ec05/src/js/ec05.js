
/**1.separats_$   Crea un codi JS que retorni els elements de l’array introduït en un String i separats
 * pel simbol $
 */
document.getElementById("uno").addEventListener("click", ()=>{
    let split =  document.getElementById("name").value.split("$");
   document.getElementById("resultado").innerHTML =split;
})
/**2.concat   Crea un codi JS que concateni l’array introduït a l’array [“zen”, 19, “choice”]
 *
 */
document.getElementById("dos").addEventListener("click", ()=> {
    let myarray=  ["zen", 19, "choice"]
    let input = document.getElementById ( "name" ).value.split ( "," ).concat(myarray);
    console.log(input)
    document.getElementById("resultado").innerHTML = String(input);

})
/**3.splice   Crea un codi JS que a l’array introduït li elimini el 2n element
 *
 */
document.getElementById("tres").addEventListener("click", ()=> {
    let input = document.getElementById ( "name" ).value.split ( "," )
    input.splice(1,1);
    document.getElementById("resultado").innerHTML = String(input);

})
/**4.splice2   Crea un codi JS que a l’array introduït li elimini el 2n element i afegeixi dos elements nous,
 * “Doe”  i  3.1415 en aquella posició
 */
document.getElementById("cuatro").addEventListener("click", ()=> {
    let input = document.getElementById ( "name" ).value.split ( "," )
    input.splice(1,1,"Doe",3.1415 );
    document.getElementById("resultado").innerHTML = String(input);

})
/**
5.strOrdenaMajor   Crea un codi JS que ordeni un Array de Strings alfabèticament   sort()
*/
document.getElementById("cinco").addEventListener("click", ()=> {
    let input = document.getElementById ( "name" ).value.split ( "," )
    let orden =input.sort();
    document.getElementById("resultado").innerHTML = String(orden);

})

/*
6.numOrdenaMajor   Ordena de menor a major un array de números
*/
document.getElementById("seis").addEventListener("click", ()=> {
    let numeros = document.getElementById ( "name" ).value.split ( "," )
    numeros.sort(function(a, b){return a - b})
    document.getElementById("resultado").innerHTML = String(numeros);

})
/*
7.numOrdenaMenor   Ordena de major a menor un array de números
*/
document.getElementById("siete").addEventListener("click", ()=> {
    let numeros = document.getElementById ( "name" ).value.split ( "," )
    let orden = numeros.sort(function(a, b){return b - a});
    document.getElementById("resultado").innerHTML = String(orden);

})
/*
8.strOrdenaPerLong   Crea un codi JS que ordeni un Array de Strings de manera que aquells elements amb strings més llargs estiguin davant.
Exemple: [“kiwi”,”apple”,”strawberry”]  →  [“strawberry”,”apple”,”kiwi”]
 */
document.getElementById("ocho").addEventListener("click", ()=> {
    let arr = document.getElementById ( "name" ).value.split ( "," )
    let orden = arr.sort(function(a, b) {
        return b.length - a.length
    });
    document.getElementById("resultado").innerHTML = String(orden);

})
/*
9.strArrayLongituds   Crea un codi JS que a partir d’un Array de Strings obtengui un array paral·lel amb les longituts dels elements. map()
	Exemple: [“kiwi”,”apple”,”strawberry”]  →  [4, 5, 10]

 */
document.getElementById("nueve").addEventListener("click", ()=> {
    let arr = document.getElementById ( "name" ).value.split ( "," )
    let orden = arr.map(array => array.length);
    document.getElementById("resultado").innerHTML = String(orden);
})
/** 10.
strCreaFraseGuions    Escriu un codi JS que una funció que, en passar-li un array de paraules,
 crei un String amb aquestes paraules separades per estais, però sense afegir guions al principi i al final del String
Exemple:  [“hola”, “que”, “tal”]    →   “hola-que-tal”  (ok)
 */
document.getElementById("diez").addEventListener("click", ()=> {
    let arr = document.getElementById ( "name" ).value.split ( "," )
    let orden = arr.join('-')
    document.getElementById("resultado").innerHTML = orden;
})

/**
11. strCreaAcronim    Fer un codi que agafi totes les paraules d’un Array de Strings i construeixi un acrònim en majúscules.
 map()
Exemple:  [“alguns”, “cans”, “miren”, “enfora”]  →  “ACME”
 */
//Preguntar al profe porque pasa esto... si pongo arrays[0] solo me aparece m
document.getElementById("once").addEventListener("click", ()=> {
    let arr = document.getElementById ( "name" ).value.split ( "," )
    let orden = arr.map(arrays => {
        return arrays[1];})
    document.getElementById("resultado").innerHTML =orden.join('');
})
/*
12. strFiltreLongitud   Escriu un codi JS que elimini d’un Array de Strings tots aquells elements que
tenguin una longitud inferior a 5.  filter()
*/
document.getElementById("doce").addEventListener("click", ()=> {
    let arr = document.getElementById ( "name" ).value.split ( "," )
    let orden = arr.filter(word => word.length > 5);
    document.getElementById("resultado").innerHTML =orden.join('');
})
/*
13. numSumaForeach   Obtén la suma total d’un array de números emprant el mètode forEach()
*/
document.getElementById("trece").addEventListener("click", ()=> {
    let arr = document.getElementById ( "name" ).value.split ( "," );
    let suma =0;
    arr.forEach(function(numero){
       suma += parseInt(numero);
    });
    document.getElementById("resultado").innerHTML =String(suma);
})
/*
14.strOcurrencies   Escriu un codi JS que calculi el número de vegades
 que apareix exactament l’string  “la” en un array. Exemple:  [“la”, “o”, “lama”, “t”, “la”, “bela”] → 2
 */
document.getElementById("catorce").addEventListener("click", ()=> {
    let arr = document.getElementById ( "name" ).value.split ( "," );
    let unir = arr.join("");
    let count =unir.split("la").length-1;
    document.getElementById("resultado").innerHTML =String(count);
})
/*
15.numSumaReduce  Obtén la suma total d’un array de números emprant el mètode reduce()
 */
document.getElementById("quince").addEventListener("click", ()=> {
    let arr = document.getElementById ( "name" ).value.split ( "," );
    let digitos= arr.map(n=>+n);
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    let myarray= digitos.reduce(reducer);
    document.getElementById("resultado").innerHTML =String(myarray);
})
/*
16.numMaxForeach   Obté el valor numèric més alt d’un array emprant forEach
 */
document.getElementById("dieciseis").addEventListener("click", ()=> {
    let arr = document.getElementById ( "name" ).value.split ( "," );
    let largest = arr[0];
    arr.forEach(function(elem){
        if(largest < parseInt(elem))
            largest = parseInt(elem);
    });
    document.getElementById("resultado").innerHTML =String(largest);
})
/*
17.restructuraArray  Escriu un codi JS que creï un Array nou agafant el primer i el darrer element d’un Array i
 col·locant-los al centre de l’Array. (Per fer aquest exercici, donarem per suposat que sempre se tractarà d’un Array
 amb un número parell de posicions)	Exemple:  [“a”, “b”, “c”, “d”, “e”, “f”]   →    [“b”, “c”, “a”, “f”, “d”, “e”,]
 */

/*
18.capCuaArray   Escriu un codi JS que donat un array de números, retalli els tres primers elements de l’array i
els col·loqui al final en ordre invertit. Exemple:  [1,5,8,3,4]  → [3,4,8,5,1]   splice()

 */


















