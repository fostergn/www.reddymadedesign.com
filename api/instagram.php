<?php
	set_time_limit(0);
	date_default_timezone_set('UTC');

	require __DIR__.'/vendor/autoload.php';

	/////// CONFIG ///////
	$username = 'rawdogornodog';
	$password = 'Sp0rtschair!';
	$debug = false;
	$truncatedDebug = false;

	$ig = new \InstagramAPI\Instagram($debug, $truncatedDebug);
	//////////////////////
	try {
	    $ig->login($username, $password);
	} catch (\Exception $e) {
	    echo 'Something went wrong: '.$e->getMessage()."\n";
	    exit(0);
	}

	try {
		$maxId = null;

		$userId = $ig->people->getUserIdForName('reddymadedesign');

		$response = $ig->timeline->getUserFeed($userId, $maxId);

		$images = [];

        foreach ($response->getItems() as $item) {

        	if($item->getImageVersions2()) {
        		$image = new stdClass();
        		$image_timestamp = $item->device_timestamp;
        		$image_url = $item->getImageVersions2()->getCandidates()[0]->getUrl();

        		$image->url = $image_url;
        		$image->timestamp = $image_timestamp;

        		$images[] = $image;
        	}
        }

        // remove last item if odd number
        if ($images.length % 2 != 0) {
        	array_pop($images);
        }

	} catch (\Exception $e) {
	    echo 'Something went wrong: '.$e->getMessage()."\n";
	}

	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Methods: GET, POST');
	header("Access-Control-Allow-Headers: X-Requested-With");
	header('Content-Type: application/json');

	echo json_encode($images);
?>
