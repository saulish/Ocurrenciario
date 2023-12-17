<?php
require "files/archivos/conecta.php";
$con =conecta();

$titulo= $_REQUEST['nombre'];
$id= $_REQUEST['id'];

$texto = $_REQUEST['texto'];

$imagen_n=$_FILES['imagen']['name'];
$imagen=$_FILES['imagen']['tmp_name'];
if($imagen_n!=""||$imagen!=""){
    $cadena     = explode (".",$imagen_n);
    $pos     =count ($cadena)-1;
    $ext        =$cadena[$pos];
    $dir        ="files/";
    $file_enc   =md5_file($imagen);
    if($imagen_n!=''){//CREAR CARPETA LLAMADA ARCHIVOS
            $imagen_1 ="$file_enc.$ext";
            copy($imagen, $dir.$imagen_1);
        }

        $sql = "UPDATE poemas SET titulo='$titulo', poema='$texto', imagen='$imagen_1' WHERE id=$id";
        $res = $con->query($sql);

}
else{
    $sql = "UPDATE poemas SET titulo='$titulo', poema='$texto' WHERE id=$id";
    $res = $con->query($sql);
}
?>