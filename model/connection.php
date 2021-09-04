<?php
    require_once 'config.php';
    $DB = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME, DB_USER, DB_PASS, [PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING]);
    $DB->exec('SET CHARACTER SET utf8');
?>
