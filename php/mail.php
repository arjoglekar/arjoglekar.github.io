
<?php
require '../phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

$mail->SMTPDebug = 0;

$mail->isSMTP();
$mail->Host = 'localhost';
$mail->Port = 25;
$mail->SMTPAuth = false;
$mail->SMTPSecure = false;

$mail->Subject = "Team TadEkam - Thankyou for Contacting Us";

$mail->Body = 'Thank you for contacting us. We will contact you shortly';

$mail->setFrom('babajitadekam@gmail.com','TadEkam');

$mail->AddAddress($_POST['email']);

if($mail->send()) {
    echo "Mail sent";
    $mail->Subject = "TadeEkam Contact";
    $mail->setFrom('babajitadekam@gmail.com','TadEkam');
    $mail->AddAddress('babajitadekam@gmail.com');
    $mail->Body = 'Name:'.$_POST['name'].'\nEmail:'.$_POST['email'].'\Phone:'.$_POST['phone'].'\Message:'.$_POST['message'];
    $mail->send();
}
else {
	echo "Mail not sent";
	echo 'Mailer Error: ' . $mail->ErrorInfo;
}
?>