<?php
/**
 * Template Routing
 *
 * Allows for better template organization within a templates directory.
 *
 * @package WordPress
 * @subpackage Setup
 * @since 2.0.0
 */

function carbon_set_stylesheet($stylesheet) {
    return dirname($stylesheet);
}
add_filter('stylesheet', 'carbon_set_stylesheet');

function carbon_set_templates_directory() {
    $stylesheet = get_option('stylesheet');
    if (basename($stylesheet) !== 'templates') {
        update_option('stylesheet', $stylesheet . '/templates');
    }
}
add_action('after_switch_theme', 'carbon_set_templates_directory');

function carbon_template_part_notice() {
    if (defined('WP_DEBUG') && true === WP_DEBUG) {
        $error_message  = "<div style='margin: 2rem; background: #f6f6f6; border-radius: 3px; border: 1px solid #dfdfdf; padding: 20px;'>";
        $error_message .= "<h4 style='margin: 0; padding-bottom: 5px; border-bottom: 1px solid #dfdfdf;'>Theme Notice</h4>";
        $error_message .= "<p style='line-height: 1.6;'>This theme routes templates to a custom folder. Therefore, get_header(), get_sidebar(), and get_footer() functions should be replaced with get_template_part('partials/header'), get_template_part('partials/sidebar'), get_template_part('partials/footer'). You can use get_header(), but it will be serving the default header file included in WordPress core.</p>";
        $error_message .= "</div>";
        echo $error_message;
    }
}
add_action('get_header', 'carbon_template_part_notice');
add_action('get_footer', 'carbon_template_part_notice');
add_action('get_sidebar', 'carbon_template_part_notice');
