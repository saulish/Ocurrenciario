<?php
require "files/archivos/conecta.php";
$con =conecta();

$titulo= $_REQUEST['nombre'];
$texto = $_REQUEST['texto'];

$imagen_n=$_FILES['imagen']['name'];
$imagen=$_FILES['imagen']['tmp_name'];
$cadena     = explode (".",$imagen_n);
$pos     =count ($cadena)-1;
$ext        =$cadena[$pos];
$dir        ="files/";
$file_enc   =md5_file($imagen);
if($imagen_n!=''){//CREAR CARPETA LLAMADA ARCHIVOS
        $imagen_1 ="$file_enc.$ext";
        copy($imagen, $dir.$imagen_1);
    }

    $sql = "INSERT INTO ideas (titulo, idea, imagen, fecha) VALUES ('$titulo', '$texto', '$imagen_1', NOW())";
    $res = $con->query($sql);

echo "idea lista";

?>