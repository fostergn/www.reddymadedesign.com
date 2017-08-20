<?php
/**
 * Theme Settings
 *
 * For the sake of organization, this file should only include require statements for the function files that you include.
 *
 * @package Carbon
 * @subpackage Functions
 * @since 2.0.0
 */

/* Setup functions */
require_once(dirname(__FILE__) . '/setup/acf-json.php');
require_once(dirname(__FILE__) . '/setup/head-links.php');
require_once(dirname(__FILE__) . '/setup/navigation.php');
require_once(dirname(__FILE__) . '/setup/remove-customizer.php');
require_once(dirname(__FILE__) . '/setup/scripts.php');
require_once(dirname(__FILE__) . '/setup/styles.php');
require_once(dirname(__FILE__) . '/setup/post-types.php');
require_once(dirname(__FILE__) . '/setup/taxonomies.php');
require_once(dirname(__FILE__) . '/setup/template-routing.php');
require_once(dirname(__FILE__) . '/setup/theme-options.php');
require_once(dirname(__FILE__) . '/setup/theme-support.php');

/* Admin functions */
require_once(dirname(__FILE__) . '/admin/developer-dashboard-meta-box.php');

/* Toolbox Functions */
// require_once(dirname(__FILE__) . '/toolbox/carbon-analytics.php');
// require_once(dirname(__FILE__) . '/toolbox/carbon-detect.php');
// require_once(dirname(__FILE__) . '/toolbox/carbon-index-title.php');
// require_once(dirname(__FILE__) . '/toolbox/carbon-render.php');
// require_once(dirname(__FILE__) . '/toolbox/carbon-svg-sprite.php');
// require_once(dirname(__FILE__) . '/toolbox/carbon-yoast-breadcrumbs.php');

/* Modular Functions */
// require_once(dirname(__FILE__) . '/modules/{ YOUR_MODULE_HERE }.php');
require_once(dirname(__FILE__) . '/modules/instagram.php');
