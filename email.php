<?php
if(isset($_POST['email'])) {

    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "info@honduraswebmedia.com";
    $email_subject = "Conctacto";


    function died($error) {
        // your error code can go here
        echo "Lo sentimos pero ha habido un error, nos puedes llamar al 229-21319 o enviarnos un correo a info@honduraswebmedia.com. ";
        die();
    }

    // validation expected data exists
    if(!isset($_POST['nombre']) ||
        !isset($_POST['email_form']) ||
        !isset($_POST['mensaje'])) {
        died('Lo sentimos pero ha habido un error, nos puedes llamar al 229-21319 o enviarnos un correo a info@honduraswebmedia.com.');
    }

    $first_name = htmlentities($_POST['nombre']); // required
    $email_from = htmlentities($_POST['email_form']); // required
    $comments = htmlentities($_POST['mensaje']); // required
    $telephone = htmlentities($_POST['telefono_form']);

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'Email Invalido.<br />';
  }
    $string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$first_name)) {
    $error_message .= 'Nombre no valido<br />';
  }


    $email_message = "Detalle del contacto.\n\n";

    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }

    $email_message .= "Nombre: ".clean_string($first_name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Telephone: ".clean_string($telephone)."\n";
    $email_message .= "Comments: ".clean_string($comments)."\n";


// create email
mail($email_to, $email_subject, $email_message);
}
?>