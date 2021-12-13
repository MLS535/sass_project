
var users = [];
var localStorageKeyName = 'data';
//function to store user name and password
var dataInLocalStorage = localStorage.getItem(localStorageKeyName);
function store(theForm) {

    var inputUsername= theForm["username"];
    var inputPassword= theForm["password"];
    //Creamos un array que almacena los usuarios y las contraseñas
    //var usuarios = JSON.parse(localStorage.getItem("usuarios")||"[]"); // get current objects


    if (dataInLocalStorage !== null) {
        users = JSON.parse(dataInLocalStorage);
    }
    var usuario = {
        username   : inputUsername.value,
        password   : inputPassword.value,
    };

    //Hacemos un push de usuarios a usuario
   // usuarios.push(usuario); //push new one
    users.push(usuario);

    localStorage.setItem(localStorageKeyName, JSON.stringify(users));
    console.log(usuario)

    //Se almacenan todos los usuarios en un array. Este array se almacen en el localStorage de Usuarios
    //
    //
    // localStorage.setItem("usuarios" ,JSON.stringify(usuarios))
   var mensaje = document.getElementById('welcomeMessage');
    mensaje.innerHTML = '';
  //  localStorage.setItem("username", inputUsername.value);

  //  localStorage.setItem("password", inputPassword.value);
 //   document.getElementById('welcomeMessage').innerHTML = "Welcome " + localStorage.getItem('username') + "!";
    users.forEach(function (x) {
        mensaje.innerHTML ='hola '+ x.username;
        console.log (mensaje);
    });
    // window.localStorage.clear();
 return false;
} // end store()

//function to sign in
function login(theForm) {
    users = JSON.parse(dataInLocalStorage);
    document.getElementById('welcomeMessage').innerHTML = "";
    var inputUsername = theForm["username"];
    var inputPassword = theForm["password"];
    var username = inputUsername.value;
    var password = inputPassword.value;
       let resultado = users.find(a => a.username === username);
        if (!resultado) {
            document.getElementById('welcomeMessage').innerHTML = "Invalid Log-in!";
        } else {
            document.getElementById('welcomeMessage').innerHTML = "Welcome " + username + "!";
        }
    }


// end login()

var registro = document.querySelector('#register');
if (  registro){
    registro.addEventListener('submit', function (e){
        e.preventDefault();
        store(this);
    })
}else {
    document.getElementById('signon').addEventListener('submit', function (e){
        e.preventDefault();
        login(this);
    })
}

