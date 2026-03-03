<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $company = strip_tags($_POST['company']);
    $message = strip_tags($_POST['message']);

    $to = "your-email@example.com";
    $subject = "New Contact from " . $name;
    $body = "Name: $name\nEmail: $email\nCompany: $company\n\nMessage:\n$message";
    $headers = "From: webmaster@yourdomain.com";

    if (mail($to, $subject, $body, $headers)) {
        header("Location: /thanks"); // Redirect to a thanks page
    } else {
        echo "Mail failed.";
    }
}
?>