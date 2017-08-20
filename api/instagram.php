<?php

	$json = file_get_contents('https://api.instagram.com/reddymadedesign/media/');

	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Methods: GET, POST');
	header("Access-Control-Allow-Headers: X-Requested-With");
	header('Content-Type: application/json');

	echo($json);
?>