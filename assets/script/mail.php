<?php
    $to = 'mangezin@gmail.com';
    $firstname = $_POST["mffname"];
    $email= $_POST["mfemail"];
    $subject= "TT Web email";
    $message= $_POST["mfmessage"];
    


    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "From: " . $email . "\r\n"; // Sender's E-mail
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    $cmpndmessage ='<table style="width:100%">
        <tr>
            <td>Message from:  '.$firstname.'</td>
        </tr>
        <tr><td>Email: '.$email.'</td></tr>
        <tr><td>Subject: '.$subject.'</td></tr>
        <tr><td>Message: '.$message.'</td></tr>
        
    </table>';

    if (@mail($to, $email, $cmpndmessage, $headers))
    {
        echo '<br />Message sent.<br />Thank you for contacting PB Botanical Bliss.<br />';
        // echo "<script>window.location.href = 'index.html';</script>";
    }else{
        echo 'Message failed! Please try again!<br />';
    }

?>
