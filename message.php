<?php
$to = "artem_bb@mail.ru";
$phone = $_POST['phone'];
$uname = $_POST['uname'];
$name_phone = $_POST['namephone'];
$price = $_POST['price'];
$gift = $_POST['gift'];

// Формирование заголовка письма
$subject  = "Новое сообщение";
$headers  = "From: info@starlight.space" . "\r\n";
$headers .= "Reply-To: info@starlight.space".  "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
// Формирование тела письма
$msg  = "<html><body>";
$msg .= "<h2>Новое сообщение</h2>\r\n";
$msg .= "<p><strong>Имя:</strong> ".$uname."</p>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$phone."</p>\r\n";
if(!empty($name_phone) && !empty($price) && !empty($gift)){
	$msg .= "<p><strong>Имя телефона:</strong> ".$name_phone."</p>\r\n";
	$msg .= "<p><strong>Цена:</strong> ".$price."</p>\r\n";	
	$msg .= "<p><strong>Подарок:</strong> ".$gift."</p>\r\n";	
}
$msg .= "</body></html>";


// отправка сообщения
@mail($to, $subject, $msg, $headers);

?>