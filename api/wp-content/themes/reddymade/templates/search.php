<?php
/**
 * Search Reults Template
 *
 * The index template serves as the template for search results.
 *
 * @package Carbon
 * @subpackage Templates
 * @since 2.0.0
 */
?>

<?php get_template_part('partials/header'); ?>
<main role="main">
    <h5>Search Results Template</h5>
    <?php $title = function_exists('get_index_title') ?  get_index_title() : 'Title Not Set'; ?>
    <h1><?php echo $title; ?></h1>
    <?php get_template_part('partials/search-form'); ?>
    <?php get_template_part('partials/loop'); ?>
</main>
<?php get_template_part('partials/sidebar'); ?>
<?php get_template_part('partials/footer'); ?>
