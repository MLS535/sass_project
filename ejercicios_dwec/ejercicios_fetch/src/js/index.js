
const CrearUnNuevoAnimal= document.getElementById('create-animal');
const EditNuevoAnimal= document.getElementById('edit-animal');
const renderAnimals = document.getElementById("zoo-animals");
const ShowAnimalInfo = document.getElementById("animal-info");

//Form Variables:

window.addEventListener('DOMContentLoaded', (event) => {
    showAllAnimals()

});

//MOSTRAR TODOS LOS ANIMALES
function showAllAnimals(){
    fetch('http://localhost:3000/animals')
        .then(response => response.json())
        .then((animals) => {
           animals.map(animal =>{
                let addname = `<li data-id=${animal.id}>${animal.name} is a ${animal.species} </li>
                    <button class="delete" data-id=${animal.id}>Delete</button>
                    <button class="show" data-id=${animal.id}>Show</button>
                    <button class="edit"  data-id=${animal.id}>Edit</button></li> 
                    
                `;
                   document.getElementById("zoo-animals").innerHTML += addname
           }
           )
        })
}

//BORRAR UN ANIMAL
deleteAllAnimals= renderAnimals.addEventListener('click', function (e){
    if (e.target.className === "delete") {
        let EventsId = e.target.dataset.id
    fetch(`http://localhost:3000/animals/${EventsId}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.status == "200"){
                document.getElementById("zoo-animals").innerHTML = `El animal ${EventsId} ha sido eliminado`;
                showAllAnimals();
            }
            else
                throw new Error(response.status)
            response.json()
        })
        .then(json => console.log(json))
}
})

//MOSTRAR UN ANIMAL
renderAnimals.addEventListener('click', function (e){
    if (e.target.className === "show") {
        let evento = e.target.dataset.id
        fetch(`http://localhost:3000/animals/${evento}`)
            .then(response => response.json())
            .then((response) => {
                let txt = `<li data-id=${response.id}>${response.name} is a ${response.species} </li>`;
                ShowAnimalInfo.innerHTML = txt;
            })
            .catch(function (error) {
                console.log (error)
            })
    }}
)

//CREAR UN ANIMAL:
CrearUnNuevoAnimal.addEventListener('submit', function (e){
    // var newEventData = e.target;
    fetch(`http://localhost:3000/animals`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "accept": "application/json"
        },

        body: JSON.stringify({
            name: e.target.name.value,
            species: e.target.species.value,
            ferociousness: e.target.ferociousness.value,
            hobby: e.target.hobby.value,
            image: e.target.image.value,
        })
    }) .then(res => res.json())
        .then(animal => {
            let addname = `<li data-id=${animal.id}>${animal.name} is a ${animal.species} </li>
                    <button class="delete" data-id=${animal.id}>Delete</button>
                    <button class="show" data-id=${animal.id}>Show</button>
                    <button class="edit"  data-id=${animal.id}>Edit</button></li> 

                `;
            document.getElementById("zoo-animals").innerHTML += addname
            console.log (addname)
        })
})


//Editar un animal No funciona:
// <!--                    onclick=" editarAnimales(${animal.id})"-->
function editarAnimales(id){
    let botonEditar =document.querySelector('.edit');
    if ( botonEditar){

        botonEditar.addEventListener('click', function (e){
            // var newEventData = e.target;
            if (e.target.className === "edit") {
                let evento = id
                fetch ( `http://localhost:3000/animals/${evento}`, {
                    method: "PATCH",
                    headers: {
                        "Content-type": "application/json",
                        "accept": "application/json"
                    },

                    body: JSON.stringify ( {
                        name: document.getElementById('nameAnimal').nameAnimal.value,
                        species: document.getElementById('speciesAnimal').speciesAnimal.value,
                        ferociousness: document.getElementById('ferociousnessAnimal').ferociousnessAnimal.value,
                        hobby: document.getElementById('hobbyAnimal').hobbyAnimal.value,
                        image:document.getElementById('imageAnimal').imageAnimal.value,
                    } )
                } ).then ( res => res.json () )
                    .then ( animal => {
                        let addname = `<li data-id=${animal.id}>${animal.name} is a ${animal.species} </li>
                    <button class="delete" data-id=${animal.id}>Delete</button>
                    <button class="show" data-id=${animal.id}>Show</button>
                    <button class="edit" data-id=${animal.id}>Edit</button></li> 
                    
                `;
                        document.getElementById ( "zoo-animals" ).innerHTML += addname
                        console.log ( addname )
                    } )
            }
        })
    }
}

