<?php
require_once 'connection.php';
$stmt = $DB->prepare("SELECT * FROM drivers");
$stmt->execute();
$drivers = $stmt->fetchAll(\PDO::FETCH_ASSOC);