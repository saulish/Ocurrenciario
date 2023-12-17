<?php
    require "files/archivos/conecta.php";
    $con = conecta();
  
    $sql_poemas="SELECT * FROM poemas WHERE status =1 AND eliminado=0";
    $res_poemas = $con->query($sql_poemas);
    $rows_poemas=$res_poemas->num_rows;

    $sql_ideas="SELECT * FROM ideas WHERE status =1 AND eliminado=0";
    $res_ideas = $con->query($sql_ideas);
    $rows_ideas=$res_ideas->num_rows;

    $filas= array(
        "poemas" => $rows_poemas,
        "ideas"=>$rows_ideas
    );
    header('Content-Type: application/json');
    echo json_encode($filas);
?>