<?php
/**
 * Post Types
 *
 * Initialize post types and customize settings with carbon_create_post_types.
 *
 * @package Carbon
 * @subpackage Setup
 * @since 2.0.0
 */

/* Building Post Type */
function create_custom_post_types() {
	custom_type_init(array(
            'name'		=>	'feature',
            'singular'	=>	'Feature Post Type',
            'plural'	=>	'Features',
            // 'menu_icon' =>  'dashicons-calendar-alt',
            'taxonomies' => array('category', 'post_tag'))
    	);
	custom_type_init(array(
            'name'		=>	'project',
            'singular'	=>	'Project Post Type',
            'plural'	=>	'Projects',
            // 'menu_icon' =>  'dashicons-share',
            'taxonomies' => array('category', 'post_tag'))
    	);
}

/* Post type defaults */
function custom_type_init($settings) {
	$labels = array(
        'name'                  =>  _x($settings['plural'], 'post type general name'),
        'singular_name'         =>  _x($settings['singular'], 'post type singular name'),
        'add_new'               =>  _x('Add New', $settings['singular']),
        'add_new_item'          =>  __('Add New ' . $settings['singular']),
        'edit_item'             =>  __('Edit ' . $settings['singular']),
        'new_item'              =>  __('New ' . $settings['singular']),
        'all_items'             =>  __('All ' . $settings['plural']),
        'view_item'             =>  __('View ' . $settings['singular']),
        'search_items'          =>  __('Search ' . $settings['plural']),
        'not_found'             =>  __('No ' . $settings['plural'] . ' found'),
        'not_found_in_trash'    =>  __('No ' . $settings['plural'] . ' found in Trash'),
        'parent_item_colon'     =>  '',
        'menu_name'             =>  $settings['plural'],
    );
    $args = array(
        'labels'                =>  $labels,
        'capability_type'       =>  (!empty($settings['capability_type']) ? $settings['capability_type'] : 'post'),
        'hierarchical'          =>  (isset($settings['hierarchical']) ? $settings['hierarchical'] : true),
        'has_archive'           =>  (isset($settings['has_archive']) ? $settings['has_archive'] : true),
        'public'                =>  (isset($settings['public']) ? $settings['public'] : true),
        'publicly_queryable'    =>  (isset($settings['publicly_queryable']) ? $settings['publicly_queryable'] : true),
        'exclude_from_search'   =>  (isset($settings['exclude_from_search']) ? $settings['exclude_from_search'] : false),
        'query_var'             =>  (isset($settings['query_var']) ? $settings['query_var'] : true),
        'show_ui'               =>  (isset($settings['show_ui']) ? $settings['show_ui'] : true),
        'show_in_menu'          =>  (isset($settings['show_in_menu']) ? $settings['show_in_menu'] : true),
        'menu_position'         =>  (!empty($settings['menu_position']) ? $settings['menu_position'] : null),
        'menu_icon'             =>  (!empty($settings['menu_icon']) ? $settings['menu_icon'] : 'dashicons-admin-post'),
        'rewrite'               =>  (!empty($settings['rewrite']) ? $settings['rewrite'] : array('slug' => '', 'with_front' => false)),
        'supports'              =>  (!empty($settings['supports']) ? $settings['supports'] : array('title', 'editor', 'excerpt', 'thumbnail', 'revisions', 'page-attributes')),
        'taxonomies'            =>  (!empty($settings['taxonomies']) ? $settings['taxonomies'] : array()),
        'show_in_rest'          =>  true
	);
	register_post_type($settings['name'], $args);
}
add_action( 'init', 'create_custom_post_types' );
