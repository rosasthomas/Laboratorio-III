///<reference path="../Clases/Empleado.ts" />
if (localStorage.getItem("Empleados") == null)
    localStorage.setItem("Empleados", "Pepe-101,Juan-102");
function Loguear() {
    var nombre;
    var legajo;
    var emp = localStorage.getItem("Empleados");
    var array_emp = Array();
    var array_datos = Array();
    nombre = document.getElementById("nombreTxt").value;
    legajo = document.getElementById("legajoTxt").value;
    if (emp != null) {
        array_emp = emp.split(",");
    }
    array_emp.forEach(function (obj) {
        array_datos = obj.split("-");
    });
    /*for(var i=0; i<array_datos.length; i++){
        console.log("split " + array_datos[i]);
        console.log("split " + array_datos[i+1]);
        console.log(nombre);
        console.log(legajo);
         
        if(array_datos[i] == nombre && array_datos[i+1] == legajo){
            alert("Son iguales");
            break;
            //window.location.href="./principal.html";
        }
        else{
            alert("No son iguales");
        }
    }*/
}
