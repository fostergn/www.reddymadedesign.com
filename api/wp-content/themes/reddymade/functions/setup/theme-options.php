<?php
/**
 * Theme Options
 *
 * Setup any theme option pages via ACF Pro plugin.
 *
 * @package Carbon
 * @subpackage Setup
 * @since 2.0.0
 */

if(function_exists('acf_add_options_page')) {
    $theme_settings_options = acf_add_options_page(array(
        'page_title' => 'General Theme Options',
        'menu_title' => 'Theme Options',
        'menu_slug'  => 'custom-theme-settings',
        'capability' => 'edit_posts',
        'icon_url'   => 'dashicons-welcome-widgets-menus',
        'redirect'   => false
	));

    acf_add_options_sub_page(array(
        'page_title' 	=> 'Tracking & Analytics Theme Options',
        'menu_title' 	=> 'Tracking/Analytics',
        'parent_slug' 	=> $theme_settings_options['menu_slug'],
    ));
}

remove_filter ('acf_the_content', 'wpautop');
