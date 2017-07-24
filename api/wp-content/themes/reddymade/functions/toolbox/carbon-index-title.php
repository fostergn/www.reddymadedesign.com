<?php
/**
 * Index/Archive Title
 *
 * Simple function to easily setup title output for index/archives that share a template.
 *
 * @package Carbon
 * @subpackage Toolbox
 * @since 2.0.0
 */

/* Get the index title */
function get_index_title() {
    if(is_home()) {
        $index_title = get_option('page_for_posts') ?: 'Posts';
    } else {
        if(is_category() || is_tax()) {
            $category    = single_term_title("", false);
            $index_title = 'Archives for the "' . $category . '" Category';
        } elseif(is_post_type_archive()) {
            $post_type        = get_post_type();
            $post_type_object = get_post_type_object($post_type);
            $index_title      = 'Archive for ' . $post_type_object->labels->name;
        } elseif(is_tag()) {
            $tag         = single_term_title("", false);
            $index_title = 'Archives for the "' . $tag . '" Category';
        } elseif(is_day()) {
            $index_title = 'Archive for ' . get_the_time('F jS, Y');
        } elseif(is_month()) {
            $index_title = 'Archive for ' . get_the_time('F Y');
        } elseif(is_year()) {
            $index_title = 'Archive for ' . get_the_time('Y');
        } elseif(is_author()) {
            $index_title = 'Author Archive';
        } elseif(is_search()) {
            $index_title = 'Search Results';
        } else {
            $index_title = 'Blog Archives';
        }
    }
    return $index_title;
}

/* Echo the index title */
function the_index_title() {
    $index_title = get_index_title();
    echo $index_title;
}
