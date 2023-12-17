<?php
    require "files/archivos/conecta.php";
    $con = conecta();
    $sql = "SELECT * FROM poemas WHERE status = 1 AND eliminado = 0 LIMIT 8";
    $res = $con->query($sql);
    $rows = array();
    while ($row = $res->fetch_assoc()) {
        $rows[] = $row;
    }
    header('Content-Type: application/json');
    echo json_encode($rows);
?>