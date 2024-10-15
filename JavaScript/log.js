function show() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'text'); // Cambia a 'text' para mostrar la contraseña
}

function hide() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'password'); // Cambia a 'password' para ocultar la contraseña
}

var pwShown = 0; // Estado para mostrar u ocultar

document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show(); // Muestra la contraseña
    } else {
        pwShown = 0;
        hide(); // Oculta la contraseña
    }
});
