<?php
/**
 * ACF JSON Save/Load Points
 *
 * Tell ACF where to store and pull local JSON files
 *
 * @package Carbon
 * @subpackage Setup
 * @since 2.0.0
 */

function carbon_acf_json_save_point($path) {
    return get_template_directory() . '/acf-json';
}
add_filter('acf/settings/save_json', 'carbon_acf_json_save_point');

function carbon_acf_json_load_point($paths) {
    unset($paths[0]);
    $paths[] = get_template_directory() . '/acf-json';
    return $paths;
}
add_filter('acf/settings/load_json', 'carbon_acf_json_load_point');
