<?php
require "funciones/files/archivos/conecta.php";
$con =conecta();
$sql ="SELECT * FROM poemas WHERE status = 1 AND eliminado =0";
$res = $con->query($sql);
$num_filas = $res->num_rows;

?>
<html>
    <head>
        <title>OCURRENCIARIO</title>
        <link rel="stylesheet" href="funciones/design.css">
        <script src="funciones/js/jquery-3.3.1.min.js"></script>
        <script src="funciones/progra.js"></script>
    </head>
    <body>
        <header id="header">
            <div id="titulo"> OCURRENCIARIO</div>
            <div id="subtitulo">POEMAS</div>    
            <div class="toggle-switch">
                <input type="checkbox" id="switch" class="toggle-input" onchange="funcion() " >
                <label for="switch" class="toggle-label"></label>
            </div>
            <div id="subtitulo">IDEAS</div>    
            <div id="firma">Saul Hdez</div>

        </header>
  
       
               
        <div id="fondo_imagen"></div>

        <div class="centro">
            
            <div id="detalles">
                <div id="detalles_imagen"></div><br>
                <div id="detalles_texto"></div>
            </div>
            <a href="nuevo.php"> 
                    <div id="subtitulo">nuevo
                        <div id="sol_luna"></div>
                    </div>   
                 </a>
        
            <div id="tabla">
                
        <?php


            #SERA POSIBLE TOMAR LA VARIABLE DIRECTAMENTE CON UNA CONSULTA DESDE AQUI, SIN NECESIDAD DE HACER UNA PETICION AJAX 

#IDEA 1
#PODRIA DESDE EL INICIO TOMAR COMPLETAMENTE TODOS LOS DATOS TANTO POEMAS COMO IDEAS Y DEJARLAS VISIBLES/INVISIBLES, Y SOLO CAMBIAR ESO CON JS

#IDEA 2
#LA OTRA ES, DEJAR AQUI DIVS PARA CADA COSA, ASI COMO CADA UNO DE LOS 8 ESPACIOS SERIAN FUNCIONALES, UTILIZANDO EL FOR DE FUNCION()
# SERIA CAPAZ DE REALIZAR UNA PETICION AJAX PARA CADA ITERACION DEL FOR, CON LO QUE ESTARIA TOMANDO LOS DATOS Y AL MOMENTO SERIAN
# REMPLAZADOS DIRECTAMENTE CON JS 


            $te_poemas=$num_filas;
            $te_poemas=8;
            $pagina_actual=1;
            $paginas_poemas=ceil($te_poemas/8);
           $residuo_pagina=$te_poemas%8;
            //echo $pagina_actual;
            //echo $paginas_poemas;



            $te_ideas=5;#total de elementos, sera obtenido con las filas de la base de datos            
            $paginas_ideas=ceil($te_ideas/8);
           $residuo_pagina_ideas=$te_ideas%8;


            //if($pagina_actual==$paginas and $pagina_actual!=1){


                if($residuo_pagina>5||$residuo_pagina==0){#CON ESTO SE MOSTRARIA AL ESTAR EN LA ULTIMA PAGINA O PRIMERA EN SU CASO
                    $n_fila=0;
                    
                    $total_imp=$residuo_pagina%8;
                    if(!$residuo_pagina%8){
                        $total_imp=8;
                    }

                }
                
                  else if($residuo_pagina<4){
                    $n_fila=2;
                    $total_imp=$residuo_pagina%8;        
                   }
                   else{
                    $n_fila=1;
                    $total_imp=$residuo_pagina%8;
                   }

            
            
                   
           //echo $total_imp;
           $n_fila=0;///////////////////////////////////////////////////////
            for($n_fila;$n_fila<3;$n_fila++){

                echo"<div class=\"d_fila\">";

                    $n_columna=0;
                
                #YO LE DOY EL NUMERO DE COLUMNAS Y EL SE ARREGLA PARA IMPRIRMIRLO 
                for($n_columna;$n_columna<5;$n_columna++){
                    

                    
                    if($n_fila%2==0 and $n_columna%2==0 and $total_imp>0){ #IMPRIME 3
                        $total_imp-= 1;
                        $row=$res->fetch_assoc();
                        $nombre=$row['titulo'];
                        $id=$row['id'];
                        echo"<div class=\"d_columna\"> 
                            <div class=\"contenido\"value=0>
                                <div class=\"circulo\">
                                <a href=\"#\" onclick=\"detalles( $id );return false;\">Enlace</a>

                                </div> 
                                <div class=\"nombre\">
                                   
                                </div>     
                       
                            </div>  
                        </div>";

                    }
                    else if($n_fila%2!=0 and $n_columna%2!=0 and $total_imp>0){ #IMPRIME 2
                        $total_imp-= 1;
                        $row=$res->fetch_assoc();
                        $nombre=$row['titulo'];
                        $id=$row['id'];
                        echo"<div class=\"d_columna\"> 
                            <div class=\"contenido\"value =0>
                                <div class=\"circulo\">
                                <a href=\"#\" onclick=\"detalles( $id );return false;\">Enlace</a>

                                </div> 
                                <div class=\"nombre\">
                                   
                                </div>     
                       
                            </div>  
                        </div>";

                    }

                    else{
                        echo"<div class=\"espacio\">  </div>";  
                           
                      
                    }

                
                    
                }
                
                echo"</div>";

                
                
            }

            ?>


            
            
        </div>

        </div>







        
    </body>
</html>