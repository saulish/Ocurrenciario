let cant_ideas;
let cant_poemas;
$.ajax({
  url: 'funciones/cant_ideas_poemas.php',
  method: 'POST',
  dataType: 'json',
  
  success: function(respuesta) {
    cant_ideas=respuesta.ideas;
    cant_poemas=respuesta.poemas;
  },
  error: function() {
    alert("Algo salió mal en la cantidad");
  }



});
window.onload = function() {
  alert("coito");
  let nuevo=document.getElementById("hoja_nuevo");

  $.ajax({
    url: 'funciones/inicio.php',
    method: 'POST',
    dataType: 'json',
    
    success: function(respuesta) {
      let enlace=document.getElementsByClassName("enlace");
      let imagen=document.getElementsByClassName("circulo");
      let nombre=document.getElementsByClassName("nombre");
      let contenedor=document.getElementsByClassName("contenido");
      for(i=0;i<respuesta.length;i++){
      
        enlace[i].innerText="Enlace";
        nombre[i].innerText= respuesta[i].titulo;
        (respuesta[i].imagen!=0)? (imagen[i].style.backgroundImage="url(funciones/files/"+respuesta[i].imagen+")")
        :(imagen[i].style.backgroundColor="wheat");
        contenedor[i].setAttribute("value",(respuesta[i].id));

        

      }
      
      //let valor = ideas[id-1].getAttribute("value");
      //ideas[i].setAttribute("value",i);

      
    },
    error: function() {
      alert("Algo salió mal");
    }
  });
  

  
};

function funcion() {
/*
YA SOLO HARIA FALTA MODIFICAR ESTO PARA QUE CADA QUE SELECCIONE EL SWITCH CAMBIEN LOS ELEMENTOS TAMBIEN YA QUE ACTUALMENTE 
CAMBIA PERO MODIFICA PRACTICAMENTE TODO, ASI QUE HAY QUE REVISAR ESTO MISMO

*/


  var fondo=document.getElementById("fondo_imagen");
  var prueba = document.getElementById("switch");

  var body = document.body;
  var headr = document.getElementById("header");
  var luna_sol=document.getElementById("sol_luna");
  var contenedor=document.getElementsByClassName("contenido");

  let enlace=document.getElementsByClassName("enlace");
  let imagen=document.getElementsByClassName("circulo");
  let nombre=document.getElementsByClassName("nombre");

  const limpiar = document.querySelectorAll('.contenido');
  limpiar.forEach(contenido => {
    contenido.innerText="";
    });





  if (prueba.checked) {//NOCHE
    
    body.style.backgroundImage = "linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)";
    fondo.style.backgroundImage="url(funciones/files/nubes.png)";
    headr.style.backgroundColor="#9BE8D8";
    luna_sol.style.backgroundImage="url(funciones/files/sol.png)";
    
    for(i=0;i<cant_ideas;i++){
      contenedor[i].innerText="Ideas";
      contenedor[i].setAttribute("value",i+1);
      enlace[i]
    }

    /*
    var poemas = document.getElementsByClassName("contenido");

    for (var i = 0; i < poemas.length; i++) { 
      circulo[i].style.backgroundImage = "url(funciones/files/choppa.jpg)";
      poemas[i].setAttribute("value",i);/////////////////////////////////////////////////////////////////////////////////////

      nombre[i].innerText="ideas "+i;//cambia al otro
    }

    */
    

  } else {//DIA
    body.style.backgroundImage = "linear-gradient(99.9deg, rgba(27,24,31,1) 21.2%, rgba(50,4,89,1) 84.8%)";
    fondo.style.backgroundImage="url(funciones/files/estrellas.png)";
    headr.style.backgroundColor="#03506F";
    luna_sol.style.backgroundImage="url(funciones/files/luna.png)";
    for(i=0;i<cant_poemas;i++){
      contenedor[i].innerText="Poemas";
      contenedor[i].setAttribute("value",i+1);
    }
    /*
    for (var i = 0; i < ideas.length; i++) { //IDEAS
      ideas[i].setAttribute("value",i);/////////////////////////////////////////////////////////////////////////////////////
      circulo[i].style.backgroundImage = "url(funciones/files/uranio.png)";
      nombre[i].innerText="poemas  " + i;//cambia al otro

    }
    */

  }
  
  
  }

function vacio(){
  $('#alert').html('Datos faltantes');
  setTimeout("$('#alert').html('');",3000);  
}

function subida(formData){
  var prueba = document.getElementById("switch");
  if(prueba.checked){
    
    $.ajax({
      url: 'funciones/subida_idea.php',
      method: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function(ban) {
          alert(ban);
      }, 
      error: function() {
          alert('error archivo no encontrado');
      }
  });
  }
  else{
    alert(imagen);
    $.ajax({
      url: 'funciones/subida_poema.php',
      method: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function(ban) {
          alert(ban);
      }, 
      success: function(ban) {
          alert(ban);
      }, 
      error: function() {
          alert('error archivo no encontrado');
      }
  });
  }
}

function registro_nuevo(){
  let form = document.getElementById("formulario");
  let formData = new FormData(form);


  let titulo = document.formulario.nombre.value;
  let texto = document.formulario.texto.value;
  let imagen = document.formulario.imagen.value;
  (titulo=="")||(texto=="")||(imagen=="")?
  vacio()
  :subida(formData);
  



 return false;
  
}
function detalles(valor){
  
  valor=(8-valor);
  
  var prueba = document.getElementById("switch");
  let contenedor=document.getElementsByClassName("contenido");

  let id = contenedor[valor].getAttribute("value");
  alert (id);
  let detalles=document.getElementById("detalles");
  let imagen=document.getElementById("detalles_imagen");
  let texto=document.getElementById("detalles_texto");
  if (prueba.checked){
    $.ajax({
      url: 'funciones/consultar_ideas.php',
      method: 'POST',
      dataType: 'json',
      data: {id: id},
      success: function(respuesta) {
        detalles.style.display="flex";
        detalles.style.backgroundColor="green";
  
        if(respuesta.imagen!=0){
          imagen.style.backgroundImage="url(funciones/files/"+respuesta.imagen+")";
        }
        else{
          imagen.style.backgroundColor="pink";
  
        }
        detalles.style.zIndex=1;
        texto.innerText=respuesta.texto;
        setTimeout(function() {
          detalles.style.display = "none";
        }, 5000);
      },
      error: function() {
        alert("Algo salió mal en detalles ideas");
      }
    });
  }

  else{
    $.ajax({
      url: 'funciones/consultar_poemas.php',
      method: 'POST',
      dataType: 'json',
      data: {id: id},
      success: function(respuesta) {
        detalles.style.display="flex";
        detalles.style.backgroundColor="green";
  
        if(respuesta.imagen!=0){
          imagen.style.backgroundImage="url(funciones/files/"+respuesta.imagen+")";
        }
        else{
          imagen.style.backgroundColor="blue";
  
        }
        detalles.style.zIndex=1;
        texto.innerText=respuesta.texto;
        setTimeout(function() {
          detalles.style.display = "none";
        }, 5000);
      },
      error: function() {
        alert("Algo salió mal en detalles poemas");
      }
    });
  }




}
