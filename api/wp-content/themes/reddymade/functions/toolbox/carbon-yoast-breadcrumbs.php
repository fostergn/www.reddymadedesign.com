<?php
/**
 * Yoast Breadcrumbs
 *
 * Since nearly all of our sites include the Yoast SEO plugin, we have created an option to use breadcrumbs generated by the plugin.
 *
 * @example templates/partials/header.php
 * @link https://wordpress.org/plugins/wordpress-seo
 * @package Carbon
 * @subpackage Toolbox
 * @since 2.0.0
 */

function get_carbon_yoast_breadcrumbs($before, $after) {
    if(function_exists('yoast_breadcrumb')) {
        $carbon_yoast_breadcrumbs = yoast_breadcrumb($before, $after, false);
        if($carbon_yoast_breadcrumbs) {
            return $carbon_yoast_breadcrumbs;
        } elseif(defined('WP_DEBUG') && true === WP_DEBUG) {
            return carbon_yoast_breadcrumbs_notice(true);
        }
    } elseif(defined('WP_DEBUG') && true === WP_DEBUG) {
        return carbon_yoast_breadcrumbs_notice(false);
    }
}

function the_carbon_yoast_breadcrumbs($before, $after) {
    echo get_carbon_yoast_breadcrumbs($before, $after);
}

function carbon_yoast_breadcrumbs_notice($yoast_installed) {
    $notice = false;
    if (is_user_logged_in() && current_user_can('manage_options')) {
        $notice  = "<div style='margin: 2rem; background: #f6f6f6; border-radius: 3px; border: 1px solid #dfdfdf; padding: 20px;'>";
        $notice .= "<h4 style='margin: 0; padding-bottom: 5px; border-bottom: 1px solid #dfdfdf;'>Theme Notice</h4>";
        if($yoast_installed) {
            $notice .= "<p style='line-height: 1.6;'>By default, this theme looks for breadcrumbs generated by the Yoast SEO plugin. It looks like you have the plugin installed, but you have not activated the breadcrumb feature. Please enable and configure your breadcrumbs.<br><br><a href='".admin_url()."admin.php?page=wpseo_advanced'>Configure Yoast Breadcrumbs &raquo;</a></p>";
        } else {
            $notice .= "<p style='line-height: 1.6;'>By default, this theme looks for breadcrumbs generated by the Yoast SEO plugin. It looks like you have not installed the Yoast Plugin. Please install the plugin to enable and configure your breadcrumbs.<br><br><a href='https://wordpress.org/plugins/wordpress-seo/' target='_blank'>Get the Yoast SEO plugin &raquo;</a><br><br><a href='".admin_url()."admin.php?page=wpseo_advanced'>Configure Yoast Breadcrumbs &raquo;</a></p>";
        }
        $notice .= "</div>";
    }
    return $notice;
}
