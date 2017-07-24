<?php
/**
 * Including Analytics
 *
 * Function dedicated to including various analytics tracking snippets from ACF.
 *
 * @package Carbon
 * @subpackage Toolbox
 * @since 2.0.0
 */

function carbon_include_tracking() {
	if(class_exists('acf')) {
		/* Include tracking code fields from ACF here. */
		$handles = array(
			'carbon_facebook_pixel',
			'carbon_google_analytics',
			'carbon_google_tag_manager',
		);
		$exceptions = array(
			'google' => array(
				'carbon_google_tag_manager',
				'carbon_google_analytics',
			),
		);
		foreach($handles as $handle) {
			/* Set output source variable */
			$source = NULL;
			/* Check if the field exists */
			$source = get_field($handle, 'option') ?: NULL;
			/* Handle exceptions */
			$source = (carbon_include_tracking_exceptions($handles, $exceptions, 'google', $handle)) ? NULL: $source;
			/* Include the code */
			echo $source;
		}
	}
}
add_action('wp_head', 'carbon_include_tracking');

function carbon_include_tracking_exceptions($handles, $exceptions, $exception_name, $handle) {
	$this_exception = $exceptions[$exception_name];
	if(in_array($handle, $this_exception)) {
		return (count(array_intersect($handles, $this_exception)) === count($this_exception) && $handle !== $this_exception[0]) ? true: false;
	} else {
		return false;
	}
}
