<?php 
	require_once 'model/connection.php'
?>

<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.6.0/leaflet.js" integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

   	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.6.0/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

   	<script src="https://cdnjs.cloudflare.com/ajax/libs/esri-leaflet/2.4.0/esri-leaflet.js" integrity="sha512-kq0i5Xvdq0ii3v+eRLDpa++uaYPlTuFaOYrfQ0Zdjmms/laOwIvLMAxh7cj1eTqqGG47ssAcTY4hjkWydGt6Eg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

   	<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.js" integrity="sha512-ozq8xQKq6urvuU6jNgkfqAmT7jKN2XumbrX1JiB3TnF7tI48DPI4Gy1GXKD/V3EExgAs1V+pRO7vwtS1LHg0Gw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

   	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.css" integrity="sha512-gc3xjCmIy673V6MyOAZhIW93xhM9ei1I+gLbmFjUHIjocENRsLX/QUE1htk5q1XV2D/iie/VQ8DXI6Vu8bexvQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

   	<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet-locatecontrol/0.74.0/L.Control.Locate.min.js" integrity="sha512-xkz6D/ebeYHZBiWVLfakNmXQR73CHJL2/YSZQfufAjyAwcmNEOTVtxmM1hlbzpCEcg76ohHVow8kSiF9fdaHQw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

   	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet-locatecontrol/0.74.0/L.Control.Locate.css" integrity="sha512-nUoa9zsaX7vY+eSo9/OOsF95gvJKkcYmwfLCCr8o7ZXXj3WBgWaPYoyh3ZpDPWCN+tPb++zqCW5PlG5IoojgYA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

   	<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.fullscreen/2.0.0/Control.FullScreen.min.js" integrity="sha512-c6ydt5Rypa1ptlnH2U1u+JybARYppbD1qxgythCI4pJ9EOfNYEWlLBjxBX926O3tq5p4Aw5GTY68vT0FdKbG3w==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

   	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.fullscreen/2.0.0/Control.FullScreen.css" integrity="sha512-KQk/GTCcAywe4iEOhnZ6ZmWDNv/3NvOE6f0iUvrNVCX/oD7+sPXAeDP90aOX3EXHmerC6gDYUlUBaSd4hxjWEw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

   	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.min.js" integrity="sha512-nhY06wKras39lb9lRO76J4397CH1XpRSLfLJSftTeo3+q2vP7PaebILH9TqH+GRpnOhfAGjuYMVmVTOZJ+682w==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

   	<link rel="stylesheet" type="text/css" href="assets/css/style.css">

    <title>Test</title>
</head>
<body>
	<header id="test">
		<h1>Тестовое задание</h1>
	</header>

	<?php require_once 'view/section_flip.php' ?>

	<?php require_once 'view/section_ajax.php' ?>

	<?php require_once 'view/section_element.php' ?>

	<?php require_once 'view/section_method.php' ?>

	<?php require_once 'view/section_db_drivers.php' ?>

	<?php require_once 'view/section_sql_join.php' ?>

	<?php require_once 'view/section_dnd.php' ?>

	<?php require_once 'view/section_controls.php' ?>

	<?php require_once 'view/section_map.php' ?>
	
	<script src="assets/js/array_flip.js"></script>
	<script src="assets/js/ajax.js"></script>
	<script src="assets/js/element.js"></script>
	<script src="assets/js/drag-n-drop.js"></script>
	<script src="assets/js/controls.js"></script>
	<script src="assets/js/map.js"></script>
</body>
</html>