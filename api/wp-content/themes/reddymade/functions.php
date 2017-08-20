<?php
/**
 * Functions
 *
 * All Carbon functions are located in the functions directory and managed through the theme-settings.php file.
 *
 * @package Carbon
 * @since 2.0.0
 */

/* Initialize all theme functions */
require_once(dirname(__FILE__) . '/functions/theme-settings.php');

add_filter( 'allowed_http_origins', 'add_allowed_origins' );
function add_allowed_origins( $origins ) {
    $origins[] = 'http://localhost:3000';
    return $origins;
}
