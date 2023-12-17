<?php

/*
$id         =$_REQUEST['id'];


$file_name  =$_FILES['archivo']['name'];//ESTA
$file_tmp   =$_FILES['archivo']['tmp_name'];//Y ESTA SE AGREGAN EN SALVA

$cadena     = explode (".",$file_name);
$pos     =count ($cadena)-1;
$ext        =$cadena[$pos];
$dir        ="archivos/";
$file_enc   =md5_file($file_tmp);
 

echo "file_name: $file_name<br>";
echo "file_tmp: $file_tmp <br>";
echo "ext: $ext <br>";
echo "file_enc: $file_enc <br>";

if($file_name!=''){//CREAR CARPETA LLAMADA ARCHIVOS
    $fileName1 ="$file_enc.$ext";
    copy($file_tmp, $dir.$fileName1);
    echo "<img src=\"archivos/$fileName1\"  width=300 height=300>";
}

*/
?>