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
function subir_editar(formulario){
    elemento=document.getElementById("titulo");
    if(elemento.getAttribute("value")==1){
      /*
      $.ajax({
        url: 'funciones/editar_idea.php',
        method: "POST",
        data: formulario,
        processData: false,
        contentType: false,
        success: function() {
          alert("Idea editada")
          window.location.href = "index.php";
        }, 
        error: function() {
            alert('error archivo no encontrado');
        }
    });
    }
    else{
      $.ajax({
        url: 'funciones/editar_poema.php',
        method: "POST",
        data: formulario,
        processData: false,
        contentType: false,
  
        success: function() {
          alert("Poema editado") 
          window.location.href = "index.php"; 
        }, 
        error: function() {
            alert('error archivo no encontrado');
        }
    });*/
    }
  
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