
window.onload = function() {
  $.ajax({
    url: 'funciones/consultar_poemas.php',
    method: 'POST',
    dataType: 'text',
    success: function(respuesta) {
      //alert(respuesta);
      
    },
    error: function() {
      alert("Algo salió mal");
    }
  });
};

function funcion() {
  var fondo=document.getElementById("fondo_imagen");
  var prueba = document.getElementById("switch");
  var body = document.body;
  var circulo = document.getElementsByClassName("circulo");
  var nombre = document.getElementsByClassName("nombre");
  var headr = document.getElementById("header");
  var luna_sol=document.getElementById("sol_luna");


  if (prueba.checked) {//NOCHE
    var poemas = document.getElementsByClassName("contenido");
    body.style.backgroundImage = "linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)";
    fondo.style.backgroundImage="url(funciones/files/nubes.png)";
    headr.style.backgroundColor="#9BE8D8";
    luna_sol.style.backgroundImage="url(funciones/files/sol.png)";
    for (var i = 0; i < poemas.length; i++) { 
      circulo[i].style.backgroundImage = "url(funciones/files/choppa.jpg)";

      nombre[i].innerText="ideas "+i;//cambia al otro
    }


    

  } else {//DIA
    var ideas = document.getElementsByClassName("contenido"); 
    body.style.backgroundImage = "linear-gradient(99.9deg, rgba(27,24,31,1) 21.2%, rgba(50,4,89,1) 84.8%)";
    fondo.style.backgroundImage="url(funciones/files/estrellas.png)";
    headr.style.backgroundColor="#03506F";
    luna_sol.style.backgroundImage="url(funciones/files/luna.png)";
    
    for (var i = 0; i < ideas.length; i++) { //IDEAS

      circulo[i].style.backgroundImage = "url(funciones/files/uranio.png)";
      nombre[i].innerText="poemas  " + i;//cambia al otro

    }


  }
  
  }