const miTitulo = document.querySelector('h1');
miTitulo.textContent = '¡Hola Mundo!';
let miImage = document.querySelector('img');
miImage.onclick = function (){
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/firefox-icon.png'){
        miImage.setAttribute('src','images/raspberry-pi-4-model-b-4-gb.jpg');
    }
    else{
        miImage.setAttribute('src', 'images/firefox-icon.png');
    }
}
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');
function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingrese su nombre a continuación.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozilla es genial, ' + miNombre;
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es genial, ' + nombreAlmacenado;
}
miBoton.onclick = function() {
    estableceNombreUsuario();
}