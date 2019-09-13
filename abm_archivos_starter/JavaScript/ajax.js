"use strict";
exports.__esModule = true;
var login_1 = require("./login");
function mostrar() {
    var http = new XMLHttpRequest();
    http.open("POST", "administracion.php", true);
    http.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    http.send("queHago=mostrarGrilla");
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            console.log("holis");
            document.getElementById("divGrilla").innerHTML = http.responseText;
        }
    };
}
window.onload = function () {
    login_1.Loguear();
    mostrar();
};
