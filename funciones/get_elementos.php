<?php
    require "files/archivos/conecta.php";
    $con = conecta();
    $opcion=$_REQUEST['elemento'];
    $pagina=$_REQUEST['pagina'];

    $desde = $pagina* 8;
    ($opcion==1)?($sql = "SELECT * FROM ideas WHERE status = 1 AND eliminado = 0 LIMIT $desde,8"):($sql = "SELECT * FROM poemas WHERE status = 1 AND eliminado = 0 LIMIT $desde,8");
    $res = $con->query($sql);
    $rows = array(

    );
    while ($row = $res->fetch_assoc()) {
        $rows[] = $row;
    }
    header('Content-Type: application/json');
 
    echo json_encode($rows);
?>