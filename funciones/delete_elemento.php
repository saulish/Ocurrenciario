<?php
require "files/archivos/conecta.php";
$con =conecta();

$tipo_elemento=$_REQUEST['dato'];
$id =$_REQUEST['id'];
($tipo_elemento==0)
?($sql="UPDATE poemas SET eliminado=1,  status =0 WHERE id=$id")
:($sql="UPDATE ideas SET eliminado=1 ,   status =0 WHERE id=$id");

$res = $con->query($sql);
echo $sql;


?>