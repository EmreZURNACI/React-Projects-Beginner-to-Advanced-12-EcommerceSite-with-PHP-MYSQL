<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    require_once("Functions.php");



    $email = $_POST["email"];
    $city = $_POST["city"];
    $state = $_POST["state"];
    $zip = $_POST["zip"];
    $fullAdresse = $_POST["fullAdresse"];
    $cardName = $_POST["cardName"];
    $cardNo = $_POST["cardNo"];
    $cardCvv = $_POST["cardCvv"];
    $cardDate = $_POST["cardDate"];
    $sepet = $_POST["siparişler"];
    OdemeyiTamamla($email, $city, $state, $zip, $fullAdresse, $cardName, $cardNo, $cardCvv, $cardDate, $sepet);
}
