<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
function GetProducts()
{
    require_once 'connection.php';
    $connec = new Connection();
    $connection = $connec->GetConnection();
    $sql = "SELECT * FROM `ecommercesite`.`productstbl`";
    $stmt = $connection->prepare($sql);
    $stmt->execute([]);
    $results = $stmt->fetchAll();
    echo json_encode($results);
}
function GetProductsByKeyword(string $text)
{
    require_once 'connection.php';
    $connec = new Connection();
    $connection = $connec->GetConnection();
    $sql = "SELECT * FROM `ecommercesite`.`productstbl` WHERE name LIKE '%$text%';";
    $stmt = $connection->prepare($sql);
    $stmt->execute([]);
    $results = $stmt->fetchAll();
    echo json_encode($results);
}
function OdemeyiTamamla($email, $city, $state, $zip, $fullAdresse, $cardName, $cardNo, $cardCvv, $cardDate, $sepet)
{
    require_once 'connection.php';
    $connec = new Connection();
    $connection = $connec->GetConnection();
    $sepet = json_encode($sepet);
    $sql =
        "INSERT INTO `ecommercesite`.`orderstbl`(`email`, `city`, `state`, `zip`, `fullAdresse`, `cardName`, `cardNo`, `cardCvv`, `cardDate`,`orders`) 
     VALUES ('$email','$city','$state','$zip','$fullAdresse','$cardName','$cardNo','$cardCvv','$cardDate','$sepet')";
    $stmt = $connection->prepare($sql);
    $stmt->execute([]);
    if ($stmt) {
        echo json_encode("Kaydınız başarıyla oluşturuldu.Ürünleriniz 3 ile 5 gün içinde adresinize teslim edilecektir");
    } else {
        echo json_encode("Satın alma işlemi BAŞARISIZ");
    }
}
function signin($password, $email)
{
    require_once("Connection.php");
    $connec = new Connection();
    $pdo = $connec->GetConnection();
    $sql = "SELECT * FROM `ecommercesite`.`userstbl` WHERE email=:email AND password=:password";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(["password" => $password, "email" => $email]);
    $result = $stmt->rowCount();
    if ($result > 0) {
        echo json_encode("Başarıyla giriş yapıldı.İyi alışverişler..");
    } else {
        echo json_encode("Giriş işlemi BAŞARISIZ.Tekrar deneyiniz.");
    }
}
function signup($password, $email)
{
    require_once("Connection.php");
    $connec = new Connection();
    $pdo = $connec->GetConnection();
    $sql = "SELECT * FROM `ecommercesite`.`userstbl` WHERE email=:mail";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(["mail"=>$email]);
    if ($stmt->rowCount() > 0) {
        echo json_encode("Bu email adresi kullanılmaktadır.Başka email adresi ile kayıt olmayı deneyin.");
    } else {
        $sql2 = "INSERT INTO `ecommercesite`.`userstbl` (email,password) VALUES (:email,:password)";
        $stmt2 = $pdo->prepare($sql2);
        $stmt2->execute(["password" => $password, "email" => $email]);
        if ($stmt2) {
            echo json_encode("Kayıt Oluşturuldu.Giriş yapmak için yönlendiriliyorsunuz..");
        } else {
            echo json_encode("Kayıt işlemi BAŞARISIZ.Tekrar deneyiniz.");
        }
    }
}
