
function subida(titulo,texto){
    var prueba = document.getElementById("switch");
    
    if(prueba.checked){
      localStorage.setItem('lastId_Idea', parseInt(localStorage.getItem('lastId_Idea'))+parseInt(1));

        var datos = JSON.parse(localStorage.getItem('datos_ideas'));

        datos.push({
          id: parseInt(localStorage.getItem('lastId_Idea')),
          titulo: titulo,
            texto: texto,
            imagen: 0,
        });
        localStorage.setItem('datos_ideas', JSON.stringify(datos));

    }else{
      localStorage.setItem('lastId_Poema', parseInt(localStorage.getItem('lastId_Poema'))+parseInt(1));

        var datos = JSON.parse(localStorage.getItem('datos_poemas'));
        datos.push({
            id: parseInt(localStorage.getItem('lastId_Poema')),
            titulo: titulo,
            texto: texto,
            imagen: 0,
        });
        localStorage.setItem('datos_poemas', JSON.stringify(datos));

    }
        alert("Se ha registrado correctamente"); 
        window.location.replace("index.html");
  }
function vacio() {
    let alerta = document.getElementById("alert");
    alerta.innerHTML = 'Datos faltantes';
    setTimeout(function() {
        alerta.innerHTML = '';
    }, 3000);
}
  function registro_nuevo(){

  
  
    let titulo = document.formulario.nombre.value;
    let texto = document.formulario.texto.value;
    (titulo=="")||(texto=="")?
    vacio()
    
    :subida(titulo,texto);
    
  
  
  
   return false;
    
  }
  




function funcion() {
    pagina_actual=0;
  
    let elemento;
    var prueba = document.getElementById("switch");
    var fondo=document.getElementById("fondo_imagen");
  
    var body = document.body;
    var headr = document.getElementById("header");
    var luna_sol=document.getElementById("sol_luna");
  
  
    if (prueba.checked) {//NOCHE
      
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
  