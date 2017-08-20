<?php

	$json = file_get_contents('https://api.instagram.com/reddymadedesign/media/');
	$data = json_decode($json);
	highlight_string("<?php\n\$data =\n" . var_export($data->items, true) . ";\n?>");


	die('end of req');
?>