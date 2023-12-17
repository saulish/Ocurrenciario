<?php
require "funciones/files/archivos/conecta.php";
$con =conecta();

?>
<html>
    <head>
        <title>NUEVO</title>
        <link rel="stylesheet" href="funciones/styles_3.css">
        <script src="funciones/js/jquery-3.3.1.min.js"></script>
        <script src="funciones/funciones_10.js"></script>
    </head>
    <body>
        <header id="header">
            <div id="titulo"> OCURRENCIARIO</div>
            <div id="subtitulo">POEMA</div>    
            <div class="toggle-switch">
                <input type="checkbox" id="switch" class="toggle-input" onchange="funcion() " >
                <label for="switch" class="toggle-label"></label>
            </div>
            <div id="subtitulo">IDEA</div>    
            <div id="firma">NUEVO</div>

        </header>
  
       
               
        <div id="fondo_imagen"></div>

        <div class="centro">
            <div id="">
                <a href="index.php"> 
                    <div id="subtitulo">regresar
                        <div id="sol_luna"></div>
                    </div>   
                 </a>
            </div>
            <div id="hoja_nuevo">
            <form enctype="multipart/form-data" name="formulario" id="formulario" method="POST" onsubmit="return registro_nuevo()">
            <div id="nuevo_titulo">Titulo<br>
                    <input type="text" name="nombre" id="nombre">
            </div>

            <div id="cuaderno"></div>
            <div id="nuevo_nombre">Texto<br>
                        
                        <textarea type="text" name="texto" id="texto"></textarea><br>    
                    </div>
                     
                    
            </div>
                <div id="alert"></div>
                <div id="cont_image">
                    <div id="subtitulo">Imagen</div><br>
                    <input type="file" name="imagen" id="imagen" accept="image/*"><br><br>
                    <input type="submit"> 
                </div>
              
             
        
             </form>               
            


           

        </div>







  <!---

             <form charset="UTF-8" enctype="multipart/form-data" name="formulario" id="formulario" onsubmit="return registro_nuevo()">

                    action="funciones/subida_imagen.php"


LO QUE HARE SERA UN FORMULARIO SIN SER FORMULARIO
HARE TODOS LOS INPUT Y AL FINAL HARE UN SUBMIT QUE LLAME A LA FUNCION DE JS LA CUAL VERIFICARA SI TODO ESTA CORRECTAMENTE LLENO
EN DADO CASO QUE ESTE LLENO, VERIFICARA SI ESTA ACTIVADO O DESACTIVADO Y DEPENDIENDO ESO VA A HACER EL AJAX Y LA SUBIDA DE LOS DATOS


-->         
    </body>
</html>