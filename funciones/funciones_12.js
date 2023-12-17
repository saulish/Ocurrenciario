
let cant_ideas=7;
let cant_poemas=6;
let pagina_actual=0;


let datos_poemas=[
  {id:1, titulo:"choppa 1", imagen:"chopper1.jpg",texto:"el pinche choppa"},
  {id:2, titulo:"Kohala", imagen:"uranio.png",texto:"la papa pendeja"},
  {id:3, titulo:"el choppa 3", imagen:"chopper3.jpg",texto:"el choperon"},
]
let datos_ideas=[
  {id:1, titulo:"la POLLA", imagen:"uranio.png",texto:"la papa mas pendeja"},
  {id:2, titulo:"el choppa 2", imagen:"chopper2.jpg",texto:"el choperus"},

]

var rutaActual = window.location.pathname;
if(rutaActual=="/ocurrenciario/index.php" || rutaActual=="/ocurrenciario/"){


}






window.onload = function() {

  console.log(rutaActual)
  const parametros= new URLSearchParams(window.location.search);
  const valor= parametros.get('valor');
  if(valor){
    alert("se recibio: "+valor);
  }else{
  }
  let next_boton=document.getElementById("next_page");
  if(cant_poemas>8){
    next_boton.innerText="Next page";
  }
  let editar=document.getElementsByClassName("editar");
  let enlace=document.getElementsByClassName("enlace");
  let imagen=document.getElementsByClassName("circulo");
  let borrar=document.getElementsByClassName("delete");
  let nombre=document.getElementsByClassName("nombre");
  let contenedor=document.getElementsByClassName("contenido");
  for(i=0;i<datos_poemas.length;i++){
    enlace[i].innerText="DETALLES";
    enlace[i].setAttribute("value",datos_poemas[i].id);

    editar[i].style.backgroundImage="url(funciones/files/editar.png)";
    editar[i].setAttribute("value",datos_poemas[i].id);

    borrar[i].style.backgroundImage="url(funciones/files/delete.png)";
    borrar[i].setAttribute("value",datos_poemas[i].id);


    nombre[i].innerText=datos_poemas[i].titulo;
    (datos_poemas[i].imagen!=0)? (imagen[i].style.backgroundImage="url(funciones/files/"+datos_poemas[i].imagen+")")
    :(imagen[i].style.backgroundColor="wheat");
  }
  
  
}
function imprimir(){
  var prueba = document.getElementById("switch");
  (prueba.checked)?(elemento=1):(elemento=0);
  var editar =document.getElementsByClassName("editar");
  var eliminar =document.getElementsByClassName("delete");
  var contenedor=document.getElementsByClassName("contenido");
  let imagen=document.getElementsByClassName("circulo");
  let enlace=document.getElementsByClassName("enlace");
  let nombre=document.getElementsByClassName("nombre");


  
  var limpiar = document.querySelectorAll('.circulo');
  limpiar.forEach(x => {
    x.style.backgroundImage="none";
    x.style.backgroundColor="none";
  });

  limpiar = document.querySelectorAll('.nombre');
  limpiar.forEach(x => {
    x.innerText = "";
  });

  limpiar = document.querySelectorAll('.enlace');
  limpiar.forEach(link => {
    link.innerText = "";
  });

  limpiar = document.querySelectorAll('.delete');
  limpiar.forEach(x => {
    x.style.backgroundImage = "none";
  });
  limpiar = document.querySelectorAll('.editar');
  limpiar.forEach(x => {
    x.style.backgroundImage = "none";
  });

  if(!elemento){

    for(i=0;i<datos_poemas.length;i++){

      enlace[i].innerText="DETALLES";
      enlace[i].setAttribute("value",datos_poemas[i].id);

      editar[i].style.backgroundImage="url(funciones/files/editar.png)";
      editar[i].setAttribute("value",datos_poemas[i].id);

      eliminar[i].style.backgroundImage="url(funciones/files/delete.png)";
      eliminar[i].setAttribute("value",datos_poemas[i].id);


      nombre[i].innerText=datos_poemas[i].titulo;
      (datos_poemas[i].imagen!=0)? (imagen[i].style.backgroundImage="url(funciones/files/"+datos_poemas[i].imagen+")")
      :(imagen[i].style.backgroundColor="wheat");
    }
  }
  else{


    for(i=0;i<datos_ideas.length;i++){

      enlace[i].innerText="DETALLES";
      enlace[i].setAttribute("value",datos_ideas[i].id);

      editar[i].style.backgroundImage="url(funciones/files/editar.png)";
      editar[i].setAttribute("value",datos_ideas[i].id);

      eliminar[i].style.backgroundImage="url(funciones/files/delete.png)";
      eliminar[i].setAttribute("value",datos_ideas[i].id);


      nombre[i].innerText=datos_ideas[i].titulo;
      (datos_ideas[i].imagen!=0)? (imagen[i].style.backgroundImage="url(funciones/files/"+datos_ideas[i].imagen+")")
      :(imagen[i].style.backgroundColor="wheat");
    }
  }

  /*
  $.ajax({
    url: 'funciones/get_elementos.php',
    method: 'POST',
    data:{elemento:elemento,pagina:pagina_actual},
    dataType: 'json',
   
    success: function(res) {
      console.log(res);
      for(i=0;i<res.length;i++){
        eliminar[i].style.backgroundImage = "url(funciones/files/delete.png)";
        editar[i].style.backgroundImage="url(funciones/files/editar.png)";
        contenedor[i].setAttribute("value",res[i].id);
        enlace[i].innerText="DETALLES";

      }
    },
    error: function() {
      alert("Algo salió mal en imprimir");
    }
  
  
  
  });*/
}
function funcion() {
  pagina_actual=0;

  let elemento;
  var prueba = document.getElementById("switch");
  var fondo=document.getElementById("fondo_imagen");

  let next_boton=document.getElementById("next_page");
  let prev_boton=document.getElementById("prev_page");
  prev_boton.innerText="";
  var body = document.body;
  var headr = document.getElementById("header");
  var luna_sol=document.getElementById("sol_luna");


  if (prueba.checked) {//NOCHE
    
    (cant_ideas>8)?(next_boton.innerText="Pagina siguiente"):(next_boton.innerText="");
    body.style.backgroundImage = "linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)";
    fondo.style.backgroundImage="url(funciones/files/nubes.png)";
    headr.style.backgroundColor="#9BE8D8";
    luna_sol.style.backgroundImage="url(funciones/files/sol.png)";
    elemento=1;


  } else {//DIA
    (cant_poemas>8)?(next_boton.innerText="Pagina siguiente"):(next_boton.innerText="");
    body.style.backgroundImage = "linear-gradient(99.9deg, rgba(27,24,31,1) 21.2%, rgba(50,4,89,1) 84.8%)";
    fondo.style.backgroundImage="url(funciones/files/estrellas.png)";
    headr.style.backgroundColor="#03506F";
    luna_sol.style.backgroundImage="url(funciones/files/luna.png)";
    elemento=0;



  }
  imprimir();

  
  }

function vacio(){
  $('#alert').html('Datos faltantes');
  setTimeout("$('#alert').html('');",3000);  
}

function subida(formData){
  var prueba = document.getElementById("switch");

  
  if(prueba.checked){
    /*
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
    $.ajax({
      url: 'funciones/subida_poema.php',
      method: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function(ban) {
          alert(ban);
          window.location.href = "index.php";
      }, 
      success: function(ban) {
          alert(ban);
          window.location.href = "index.php";

      }, 
      error: function() {
          alert('error archivo no encontrado');
      }
  });*/
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
function detalles(elemento){
  
  let id = elemento.getAttribute("value")
  alert(id);
  var prueba = document.getElementById("switch");
  (prueba.checked)?(elemento=1):(elemento=0);
  let contenedor=document.getElementsByClassName("contenido");


  let detalles=document.getElementById("detalles");
  let imagen=document.getElementById("detalles_imagen");
  let texto=document.getElementById("detalles_texto");
  //CUANDO ES 1 ES IDEA
  if(elemento){
    respuesta=datos_ideas[id-1];
    detalles.style.display="flex";
    detalles.style.backgroundColor="white";

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
      imagen.style.backgroundImage="none";
    }, 5000);
  }else{
    respuesta=datos_poemas[id-1];
    detalles.style.display="flex";
    detalles.style.backgroundColor="white";

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
      imagen.style.backgroundImage="none";
    }, 5000);
  }
  /*
  $.ajax({
    url: 'funciones/consultar.php',
    method: 'POST',
    dataType: 'json',
    data: {id: id,elemento:elemento},
    success: function(respuesta) {

    },
    error: function() {
      alert("Algo salió mal en detalles");
    }
  });*/

}
function eliminar(elemento){
  
  let id = elemento.getAttribute("value")
  alert(id)
  let contenedor=document.getElementsByClassName("contenido");

  let boton = document.getElementById("switch");
  (boton.checked)?(datos_ideas=datos_ideas.filter(item=>item.id !=1)):(datos_poemas=datos_poemas.filter(item=>item.id !=1));
  console.log(datos_ideas);
  console.log(datos_poemas);
  funcion();

}
function editar(elemento){
  let id = elemento.getAttribute("value")
  alert(id);
  let contenedor=document.getElementsByClassName("contenido");
  let boton = document.getElementById("switch");
  var datos;
  (boton.checked)?(datos=datos_ideas[id-1]):(datos=datos_poemas[id-1]);
  var datosString = JSON.stringify(datos);


  window.location.href = "editar.html?datos="+ encodeURIComponent(datosString);

  /*
  (boton.checked)?(elemento=1):(elemento=0);
  var datos = document.createElement("form");
  datos.action = "editar.html";
  datos.method = "post";
  datos.id="datos"
  datos.name="datos"
  var input = document.createElement("input");
  input.type = "hidden";
  input.name = "id"; // Aquí establece el nombre del campo
  input.value = id; // Asigna el valor de la variable id
  
  datos.appendChild(input);
  document.body.appendChild(datos);
  datos.submit();
  */

  

}

function next(){
  let prev_boton=document.getElementById("prev_page");
  let next_boton=document.getElementById("next_page");
  pagina_actual++;
  if(Math.ceil(cant_poemas/8)>=pagina_actual){
    next_boton.innerText="";
  }
  imprimir();
  prev_boton.innerText="Pagina anterior";

}
function prev(){
    let next_boton=document.getElementById("next_page");
  pagina_actual--;
  imprimir();
  if(pagina_actual==0){
    let prev_boton=document.getElementById("prev_page");
    prev_boton.innerText="";
  }
  next_boton.innerText="Pagina siguiente";
}