var resultat = document.getElementById("resultat");
var error = document.getElementById("error");




export function validarUsername(){
    let user = document.getElementById("username").value;
    var indices = [];
    var element = '_';
    var idx = user.indexOf(element);
    while (idx !== -1) {
        indices.push(idx);
        idx = user.indexOf(element, idx + 1);
    }
    console.log(indices);
// [0, 2, 4]
    console.log (user);
    if ( !user.startsWith("u_")){
        error.innerText = "Lo siento tiene que empezar con u_";
    }
    if ( user.length < 6 ){
        error.innerText = "Lo siento tiene que tener 6 caracteres"}
    //Comprobar si hay mas

    if (idx >= 1) {
        error.innerText = "Los siento solo puede contener un _"
    }
    else if( user === "" ){
        error.innerText = "Debe incluir algun caracter";
    }
    else
        resultat.innerText = "correcte el usuari "+ user.toString().valueOf();
}


export function validarPassword(){
    let password= document.getElementById("password").value;
    if ( password.length < 7 ){
        error.innerText = "Lo siento tiene que tener 6 caracteres"}
    if ( password === "" ){
        error.innerText = "Debe incluir algun caracter";
    }
    // if ( password !=='$%'.repeat(2) ){
    //     error.innerText = "Debe incluir $%";
    // }
    else if( password === "12345" ){
        error.innerText = "Lo siento no puede incluir 12345"
    }
    else
        resultat.innerText = "correcte la contraseña "+ password.toString().valueOf()
}
