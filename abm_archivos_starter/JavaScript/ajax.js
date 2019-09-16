function mostrar() {
    var http = new XMLHttpRequest();
    http.open("POST", "administracion.php", true);
    http.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    http.send("queHago=mostrarGrilla");
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            document.getElementById("divGrilla").innerHTML = http.responseText;
        }
    };
}
function loguear() {
    var http = new XMLHttpRequest();
    http.open("POST", "verificacion.php", true);
    http.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    http.send("usuario=logueado");
    var flag = false;
    console.log(http.responseText);
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            if (http.responseText == "ok") {
                flag = true;
            }
        }
    };
    return flag;
}
window.onload = function () {
    if (loguear()) {
        mostrar();
    }
};
