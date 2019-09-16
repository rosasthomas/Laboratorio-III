function mostrar(){
    var http = new XMLHttpRequest();
    http.open("POST", "administracion.php", true);
    http.setRequestHeader("content-type","application/x-www-form-urlencoded");
    http.send("queHago=mostrarGrilla");
    http.onreadystatechange = () => {
        if (http.readyState == 4 && http.status == 200) {
            console.log("holis");
            (<HTMLDivElement>document.getElementById("divGrilla")).innerHTML = http.responseText;
        }
    };
}

function loguear() : boolean{
    var http = new XMLHttpRequest();
    http.open("POST", "verificacion.php", true);
    var $flag = false;
    if(http.response == "ok"){
       $flag = true;
    }
    
    return $flag;
}
window.onload=function(){
    if(loguear()){
        mostrar();
    }
};