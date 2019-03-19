
<?php
require '../phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

$mail->SMTPDebug = 0;

$mail->isSMTP();
$mail->Host = 'localhost';
$mail->Port = 25;
$mail->SMTPAuth = false;
$mail->SMTPSecure = false;

$mail->Subject = "Tadekam Contact";
$mail->setFrom('babajitadekam@gmail.com','Tadekam');
$mail->addAddress('babajitadekam@gmail.com');
$mail->addAddress($_POST['email']);
$mail->Body = "Thank you for contacting us. We will get back to you shortly on following details\r\nName:".$_POST['name']."\r\nEmail:".$_POST['email']."\r\nPhone:".$_POST['phone']."\r\nMessage:".$_POST['message'];

if($mail->send()) {
    echo "Mail sent";
}
else {
	echo "Mail not sent";
	echo 'Mailer Error: ' . $mail->ErrorInfo;
}
?>