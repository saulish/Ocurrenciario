
let cant_ideas=7;
let cant_poemas=6;
let pagina_actual=0;


var datos_ideas=JSON.parse(localStorage.getItem('datos_ideas'));
var datos_poemas=JSON.parse(localStorage.getItem('datos_poemas'));

var rutaActual = window.location.pathname;
if(rutaActual=="/ocurrenciario/index.php" || rutaActual=="/ocurrenciario/"){


}




console.log(datos_ideas);
console.log(datos_poemas);

window.onload = function() {

  //console.log(rutaActual)
 
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
    :imagen[i].style.backgroundColor = 'rgb(40, 116, 166)';
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
  x.style.backgroundColor="";
  

    
    
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
      :imagen[i].style.backgroundColor = 'rgb(40, 116, 166)';
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

      console.log(datos_ideas[i].imagen)

      nombre[i].innerText=datos_ideas[i].titulo;

      (datos_ideas[i].imagen!=0)? (imagen[i].style.backgroundImage="url(funciones/files/"+datos_ideas[i].imagen+")")
      :imagen[i].style.backgroundColor = 'rgb(40, 116, 166)'
    }
  }

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

function cerrar_detalles(elemento){
  var prueba = document.getElementById("switch");
  (prueba.checked)?(elemento=1):(elemento=0);
  let detalles=document.getElementById("detalles");
  let imagen=document.getElementById("detalles_imagen");
  let titulo=document.getElementById("detalles_titulo");
  detalles.style.display = "none";
  imagen.style.backgroundImage="none";
  titulo.innerText="";
}
function get_objeto(elemento,id){
  if(elemento){
    for(i=0;i<datos_ideas.length;i++){
      if(datos_ideas[i].id==id){
        return datos_ideas[i];
      }
    }
  }else{
    for(i =0; i<datos_poemas.length;i++){
      if(datos_poemas[i].id==id){
        return datos_poemas[i];
      }
    }
  }
}
function BL(elemento,id,x){
  if(elemento){
    for(i=0;i<datos_ideas.length;i++){

      if(datos_ideas[i].id==id){
        return i;
      }
    }
  }else{
    for(i =0; i<datos_poemas.length;i++){
      if(datos_poemas[i].id==id){
        return i;
      }
    }
  }
  return -1;
}
function detalles(elemento){
  let id = elemento.getAttribute("value")


  var prueba = document.getElementById("switch");
  (prueba.checked)?(elemento=1):(elemento=0);


  let contenedor=document.getElementsByClassName("contenido");


  let detalles=document.getElementById("detalles");
  let titulo=document.getElementById("detalles_titulo");
  let boton=document.getElementById("cerrar_detalles_boton");
  let imagen=document.getElementById("detalles_imagen");
  let texto=document.getElementById("detalles_texto");
  texto.innerText="";

  //CUANDO ES 1 ES IDEA
  if(elemento){
    respuesta=get_objeto(elemento,id);
    detalles.style.display="flex";
    detalles.style.backgroundColor="white";

    if(respuesta.imagen!=0){
      imagen.style.backgroundImage="url(funciones/files/"+respuesta.imagen+")";
    }
    else{
      imagen.style.backgroundColor="rgb(171, 235, 198)";
      texto.innerText="No hay imagen \n\n";

    }
    detalles.style.zIndex=1;
    texto.innerText+=respuesta.texto;
    titulo.innerHTML="Detalles de: "+respuesta.titulo;
    boton.style.backgroundImage="url(funciones/files/delete.png)";

  }else{
    respuesta=get_objeto(elemento,id);

    detalles.style.display="flex";
    detalles.style.backgroundColor="white";

    if(respuesta.imagen!=0){
      imagen.style.backgroundImage="url(funciones/files/"+respuesta.imagen+")";
    }
    else{
      
      imagen.style.backgroundColor="rgb(40, 116, 166)";
      texto.innerText="No hay imagen \n\n";

    }
    detalles.style.zIndex=1;
    texto.innerText+=respuesta.texto;
    //titulo.innerHTML=titulo.innerHTML.concat(respuesta.titulo);
    titulo.innerHTML="Detalles de: "+respuesta.titulo;
    boton.style.backgroundImage="url(funciones/files/delete.png)";


 
  }


}
function eliminar(elemento){
  
  let id = elemento.getAttribute("value")
  let contenedor=document.getElementsByClassName("contenido");

  let boton = document.getElementById("switch");
  (boton.checked)?(datos_ideas=datos_ideas.filter(item=>item.id !=id)):(datos_poemas=datos_poemas.filter(item=>item.id !=id));
  (boton.checked)?(localStorage.setItem('datos_ideas', JSON.stringify(datos_ideas))):(localStorage.setItem('datos_poemas', JSON.stringify(datos_poemas)));






  funcion();

}
function editar(elemento){
  let id = elemento.getAttribute("value")
  let contenedor=document.getElementsByClassName("contenido");
  let boton = document.getElementById("switch");
  var datos;

  let ps =BL(boton.checked,id,0)
  console.log(ps);
  (boton.checked)?(datos=datos_ideas[ps]):(datos=datos_poemas[ps]);

  localStorage.setItem('id', datos.id);
  localStorage.setItem('poema_idea', boton.checked.toString());




  window.location.href = "editar.html";

  

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


function restaurar(){
   datos_poemas=[
    {id:1, titulo:"choppa 1", imagen:"chopper1.jpg",texto:"el pinche choppa"},
    {id:2, titulo:"Kohala", imagen:"uranio.png",texto:"la papa pendeja"},
    {id:3, titulo:"el choppa 3", imagen:"chopper3.jpg",texto:"el choperon"},
    ]
     datos_ideas=[
    {id:1, titulo:"la POLLA", imagen:"uranio.png",texto:"la papa mas pendeja"},
    {id:2, titulo:"el choppa 2", imagen:"chopper2.jpg",texto:"el choperus"},

    ]

    localStorage.setItem('datos_poemas', JSON.stringify(datos_poemas));
    localStorage.setItem('datos_ideas', JSON.stringify(datos_ideas));
    localStorage.setItem('lastId_Poema', parseInt(3));
    localStorage.setItem('lastId_Idea', parseInt(2));

    funcion();
}