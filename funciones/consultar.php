<?php
require "files/archivos/conecta.php";
$con =conecta();

$id = $_REQUEST['id'];
$elemento=$_REQUEST['elemento'];
if($elemento==1){
    $sql="SELECT * FROM ideas WHERE id =$id AND status =1 AND eliminado =0";
    $res = $con->query($sql);
    $row=$res->fetch_assoc();


    $datos =array(
        "texto" => $row['idea'],
        "titulo"=> $row['titulo'],
        "imagen"=>$row['imagen']
    );

}
else{
    $sql="SELECT * FROM poemas WHERE id =$id AND status =1 AND eliminado =0";
    $res = $con->query($sql);
    $row=$res->fetch_assoc();


    $datos =array(
        "texto" => $row['poema'],
        "titulo"=> $row['titulo'],
        "imagen"=>$row['imagen']
    );
}

header('Content-Type: application/json');
echo json_encode($datos);



?>