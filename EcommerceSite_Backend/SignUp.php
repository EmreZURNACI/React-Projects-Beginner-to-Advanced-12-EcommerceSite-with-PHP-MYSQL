<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    require_once("Functions.php");
    $mail = $_POST["mail"];
    $password = $_POST["password"];
    signup($password, $mail);
}
