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
        <link rel="stylesheet" href="funciones/styles_3.css">
        <script src="funciones/js/jquery-3.3.1.min.js"></script>
        <script src="funciones/funciones_10.js"></script>
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
  
       <div id="actual" value=1></div>
               
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

            $te_poemas=$num_filas;
            $te_poemas=8;
            $pagina_actual=1;
            $paginas_poemas=ceil($te_poemas/8);
           $residuo_pagina=$te_poemas%8;




            $te_ideas=5;          
            $paginas_ideas=ceil($te_ideas/8);
           $residuo_pagina_ideas=$te_ideas%8;

                if($residuo_pagina>5||$residuo_pagina==0){
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
   
            $te_poemas=8;

           $n_fila=0;
            for($n_fila;$n_fila<3;$n_fila++){

                echo"<div class=\"d_fila\">";

                    $n_columna=0;
                
                for($n_columna;$n_columna<5;$n_columna++){
                    
                    if($n_fila%2==0 and $n_columna%2==0 and $total_imp>0){ #IMPRIME 3
                        echo"<div class=\"d_columna\"> 
                            <div class=\"contenido\"value=33>
                            <a href=\"#\"class=\"delete\" onclick=\"eliminar($te_poemas);return false;\"></a>
                            <a href=\"#\"class=\"editar\" onclick=\"editar($te_poemas);return false;\"></a>

                                <div class=\"circulo\">
                                    <a href=\"#\"class=\"enlace\" onclick=\"detalles($te_poemas);return false;\"></a>
                                
                                </div> 
                                <div class=\"nombre\">
                                   
                                </div>     
                       
                            </div>  
                        </div>";
                        $te_poemas=$te_poemas-1;

                    }
                    else if($n_fila%2!=0 and $n_columna%2!=0 and $total_imp>0){ #IMPRIME 2
                        echo"<div class=\"d_columna\"> 
                            <div class=\"contenido\"value=22>
                            <a href=\"#\"class=\"delete\" onclick=\"eliminar($te_poemas);return false;\"></a>
                            <a href=\"#\"class=\"editar\" onclick=\"editar($te_poemas);return false;\"></a>

                                <div class=\"circulo\">
                                    <a href=\"#\"class=\"enlace\" onclick=\"detalles($te_poemas);return false;\"></a>
                                </div> 
                                <div class=\"nombre\">
                                   
                                </div>     
                       
                            </div>  
                        </div>";
                        $te_poemas=$te_poemas-1;

                    }
                    
                    else{
                        echo"<div class=\"espacio\">  </div>";  
                           
                      
                    }

                
                    
                }
                
                echo"</div>";

                          
            }

            ?>
          
            
        </div>
        <a href="" onclick="prev();return false;" >
        
             <div id="prev_page"></div>
        </a>
        <a href=""onclick="next();return false;">
             <div id="next_page"></div>
        </a>
       

        </div>
        
    </body>
</html>