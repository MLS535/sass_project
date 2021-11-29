let jugadors = [
  { dorsal: 1, name: "John Mayal", age: 38 },
  { dorsal: 3, name: "Peter Tusk", age: 30 },
  { dorsal: 8, name: "Logan McKenzie", age: 22 },
  { dorsal: 24, name: "Pepe Rust", age: 18 },
  { dorsal: 9, name: "Malk Sonic", age: 37 },
  { dorsal: 11, name: "Trop Wurst", age: 33 },
  { dorsal: 12, name: "Banfild Soren", age: 37 },
  { dorsal: 10, name: "Ken Dorst", age: 31 },
  { dorsal: 30, name: "Miles Fichte", age: 17 },
  { dorsal: 5, name: "Adu Baye", age: 25 },
]

let jugada = [...jugadors];
var imprimirjugadores= document.getElementById("divJugadors");
var ordenar = document.getElementById("ordena");
var purga = document.getElementById("purga")

const jugadores =jugada.map(jugador => `<div class="jugador">${jugador.dorsal}, ${jugador.name},
${jugador.age} <button class="delete"> Eliminar</button> </div>

`
)

imprimirjugadores.innerHTML= jugadores.join("");

//Ordenar por dorsal
ordenar.addEventListener("click", function (){

  //Ordenar por numero
  let sortStrings = function (number1, number2) {
    if (number1 > number2) return 1
    if (number1 < number2) return -1
    return 0}

 const jugadoresordenados = jugada.sort((a, b) => sortStrings(a.dorsal, b.dorsal)).map(jugador => `<div>${jugador.dorsal}, ${jugador.name},
${jugador.age} <botton class="eliminar">Eliminar</botton></div>

`
  )
  imprimirjugadores.innerHTML= jugadoresordenados.join("");
  removeEvents();
})




//TODO REVISAR QUE AL REALIZAR EL BORRADO SE BORRE TODO
purga.addEventListener("click", function (){{
  let jugadorespurgados = jugada.filter(age => age.age<30).map(jugador =>`<div>${jugador.dorsal}, ${jugador.name},
${jugador.age} <botton class="delete">Eliminar</botton></div>

`)
  imprimirjugadores.innerHTML= jugadorespurgados.join("");
}})

const removeEvents =function (){
  imprimirjugadores.addEventListener('click', evt => {
    //devuelve el ascendiente más cercano al elemento actual que coincida con el selector proporcionado por parámetro.
    const papelera = evt.target.closest('.delete');
    console.log(papelera);
    if ( !papelera ) return
    //devolverá el elemento padre, en este caso busca el primer div y despues el segundo dentro de papelera que sería event y lo borrará con la función remove()
    papelera.parentElement.remove()

  })
}
removeEvents();