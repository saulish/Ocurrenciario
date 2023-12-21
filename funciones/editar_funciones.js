var datos_ideas=JSON.parse(localStorage.getItem('datos_ideas'));
var datos_poemas=JSON.parse(localStorage.getItem('datos_poemas'));

var poema_idea =  localStorage.getItem('poema_idea');
var id = localStorage.getItem('id');

function funcion() {
  pagina_actual=0;

  let elemento;
  var fondo=document.getElementById("fondo_imagen");

  var body = document.body;
  var headr = document.getElementById("header");
  var luna_sol=document.getElementById("sol_luna");


  if (poema_idea=='true') {//NOCHE
    
    body.style.backgroundImage = "linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)";
    fondo.style.backgroundImage="url(funciones/files/nubes.png)";
    headr.style.backgroundColor="#9BE8D8";
    luna_sol.style.backgroundImage="url(funciones/files/sol.png)";
    elemento=1;


  } else {//DIA
    body.style.backgroundImage = "linear-gradient(99.9deg, rgba(27,24,31,1) 21.2%, rgba(50,4,89,1) 84.8%)";
    fondo.style.backgroundImage="url(funciones/files/estrellas.png)";
    headr.style.backgroundColor="#03506F";
    luna_sol.style.backgroundImage="url(funciones/files/luna.png)";
    elemento=0;



  }

  
  }

  function BL(id){
    if(!poema_idea){
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
window.onload = function() {
  let subtitulo =document.getElementById("subtitulo");
  console.log(((poema_idea=='true')?("Idea"):("Poema")));
  subtitulo.innerText=(poema_idea=='true')?("Idea"):("Poema")
  funcion();
  let posicion =BL(id);  
  var datos={
    titulo: (poema_idea=='true')?(JSON.parse(localStorage.getItem('datos_ideas'))[posicion].titulo):((JSON.parse(localStorage.getItem('datos_poemas'))[posicion].titulo)),
    texto: (poema_idea=='true')?(JSON.parse(localStorage.getItem('datos_ideas'))[posicion].texto):((JSON.parse(localStorage.getItem('datos_poemas'))[posicion].texto)),
  }

  let titulo = document.getElementById("nombre");
  let texto = document.getElementById("texto");
  titulo.setAttribute("value",datos.titulo);
  texto.value=datos.texto;
}
function vacio() {
  let alerta = document.getElementById("alert");
  alerta.innerHTML = 'Datos faltantes';
  setTimeout(function() {
      alerta.innerHTML = '';
  }, 3000);
}
function listo_editar(titulo,texto){
  var datos;
  (poema_idea=='true')?(datos=JSON.parse(localStorage.getItem('datos_ideas'))):(datos=JSON.parse(localStorage.getItem('datos_poemas')));
  datos[id-1].titulo=titulo;
  datos[id-1].texto=texto;
  let t_foto=datos[id-1].imagen;
  //alert(t_foto)
  //t_foto==""?datos[id-1].imagen=datos[id-1].imagen:datos[id-1].imagen=imagen;
  
  (poema_idea=='true')?(localStorage.setItem('datos_ideas', JSON.stringify(datos))):(localStorage.setItem('datos_poemas', JSON.stringify(datos)));

  alert("Se ha editado correctamente"); 
  window.location.replace("index.html");
}
function registro_edit(){

    let titulo = document.formulario.nombre.value;
    let texto = document.formulario.texto.value;
    (titulo=="")||(texto=="")?
    vacio()
    :listo_editar(titulo,texto);
    
  
  
  
   return false;
  }