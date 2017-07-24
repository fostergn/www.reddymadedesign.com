<?php
/**
 * Mobile Detection
 *
 * Using MobileDetect package that is included with Composer.
 *
 * @link https://github.com/serbanghita/Mobile-Detect
 *
 * @package Carbon
 * @subpackage Toolbox
 * @since 2.0.0
 */

function carbon_is_mobile($echo = false) {
	$detect = new Mobile_Detect;
	if($detect->isTablet() === true || $detect->isMobile() === true) {
		echo($echo === true) ? 'carbon-mobile' : '';
		return true;
	} else {
		echo($echo === true) ? 'carbon-no-mobile' : '';
		return false;
	}
}
