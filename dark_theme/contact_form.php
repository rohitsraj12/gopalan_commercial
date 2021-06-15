<?php

if(isset($_POST['email'])){
    // message from
    $user_name = $_POST['name'];
    $user_phone = $_POST['phone'];
    $user_email = $_POST['email'];
    $user_msg = $_POST['message'];

    // echo $user_name . " </br> " . $user_email . " </br> " . $user_phone  . " </br> " . $user_location  . " </br> " . $seats . " </br> " . $form_type;

    $to = "webdesigner@gopalanenterprises.com";
    $to1 = "marketing@gopalancoworks.com";
    $subject = "Contact Form | Gopalan Commercial Website";
    $message = "<p>Contact Form</p></br>";
    $message .= "<p> Name: <strong>". $user_name ."</strong></p></br>";
    $message .= "<p> Phone number: <strong>". $user_phone ."</strong></p></br>";
    $message .= "<p> Email: <strong>". $user_email ."</strong></p></br>";
    // $message .= "<p> Selected location: <strong>". $user_location ."</strong></p></br>";
    $message .= "<p> Message: <strong>". $user_msg ."</strong></p></br>";
    $message .= "<p>Thank you,</p>";
    $message .= "<p>". $user_name ."</p>";
    $message .= "<p>" . $user_email . " | " . $user_phone . "</p>";
    
    $headers = "From:" . $user_name . " <" . $user_email . ">\r\n";
    $headers .= "Reply-To: " . $user_email . "\r\n";
    $headers .= "Content-type: text/html\r\n";

    mail($to, $subject, $message, $headers);
    mail($to1, $subject, $message, $headers);

    header("location:thank-you.html");
}
?>