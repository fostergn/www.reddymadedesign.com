<?php
/**
 * Render Partials or Templates
 *
 * Simple function render partial or template files while allowing variable to be passed into the target.
 *
 * @package Carbon
 * @subpackage Toolbox
 * @since 2.0.0
 */

/* Render a partial & include context variable */
function render_partial($path, $context = NULL) {
    include(get_template_directory() . '/templates/partials/' . $path . '.php');
}
/* Render a template & include context variable */
function render_template($path, $context = NULL) {
    include(get_template_directory() . '/templates/' . $path . '.php');
}
