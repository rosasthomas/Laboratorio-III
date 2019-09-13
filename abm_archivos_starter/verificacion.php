<?php
session_start();
    if(isset($_SESSION["usuario"])){
        if($_SESSION["usuario"] == "ok"){
            
        }
        else{
            header("location=login.php");
        }
    }
   