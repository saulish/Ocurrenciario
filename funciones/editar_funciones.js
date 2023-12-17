var queryParams = new URLSearchParams(window.location.search);
var datosString = queryParams.get("datos");
var datos = JSON.parse(decodeURIComponent(datosString));
       console.log(datos);

window.onload = function() {
  let form = document.getElementById("formulario");
  let titulo = document.getElementById("nombre");
  let texto = document.getElementById("texto");
  titulo.setAttribute("value",datos.titulo);
  texto.value=datos.texto;
}

function vacio(){
    $('#alert').html('Datos faltantes');
    setTimeout("$('#alert').html('');",3000);  
}

  function registro_edit(){
    let form = document.getElementById("formulario");
    let formData = new FormData(form);
    
  
    let titulo = document.formulario.nombre.value;
    let texto = document.formulario.texto.value;
    let imagen = document.formulario.imagen.value;
    (titulo=="")||(texto=="")?
    vacio()
    :subir_editar(formData);
    
  
  
  
   return false;
  }