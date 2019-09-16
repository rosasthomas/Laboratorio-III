<?php
session_start();
    if(isset($_SESSION["usuario"]) && $_SESSION["usuario"] == "ok"){
        echo "ok";
    }
    else{
        $_SESSION["usuario"] = $_POST["usuario"];
        header("location:login.php");
    }   
   