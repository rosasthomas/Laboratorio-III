/// <reference path="../lib/jquery/index.d.ts" />
function Registrar() {
    var nombre = $('#nombreText').val();
    var apellido = $('#apellidoText').val();
    var mail = $('#mailText').val();
    var legajo = $('#legajoText').val();
    var perfil = $('#perfilText').val();
    var foto = $("#fotoFile").prop('files')[0];
    var clave = $('#claveText').val();
    var existe = false;
    var lista = Array();
    lista = JSON.parse(localStorage.getItem('usuarios'));
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var usu = lista_1[_i];
        if (usu.correo == mail) {
            existe = true;
            $('#alertText').html('El correo ya esta registrado');
            $('.alert').toggle();
            break;
        }
    }
    if (!existe) {
        var nuevo_1 = { 'correo': mail, 'clave': clave, 'nombre': nombre, 'apellido': apellido, 'legajo': legajo, 'perfil': perfil, 'foto': foto.name };
        var formUsu = new FormData();
        formUsu.append('foto', foto);
        formUsu.append('usu', JSON.stringify(nuevo_1));
        var ajaxFoto = $.ajax({
            type: "POST",
            url: "./backend/",
            cache: false,
            contentType: false,
            processData: false,
            data: formUsu,
            dataType: "JSON"
        });
        ajaxFoto.done(function (response) {
            if (response.ok) {
                lista.push(nuevo_1);
                localStorage.setItem("usuarios", JSON.stringify(lista));
                window.location.href = './login.html';
            }
            else {
                console.log("No se pudo registrar");
            }
        });
    }
}
