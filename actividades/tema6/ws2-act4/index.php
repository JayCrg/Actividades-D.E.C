<?php
$usuarios = array('pedro', 'rodrigo', 'julia');
if(isset($_GET["user"])){
    $user = $_GET["user"];
    if(in_array($user, $usuarios)){
        // echo "El usuario $user ya existe";
        return false;
    }else{
        // echo "El usuario $user está disponible";
        return true;
    }
}
?>