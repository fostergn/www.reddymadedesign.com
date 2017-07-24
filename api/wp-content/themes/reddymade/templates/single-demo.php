<?php
/**
 * Demo Template
 *
 * This is a sample custom post type 'single' template for the 'Demo' post type that is include in Carbon by default.
 *
 * @package Carbon
 * @subpackage Templates
 * @since 2.0.0
 */
?>

<?php get_template_part('partials/header'); ?>
<main role="main">
    <?php if(have_posts()) : while(have_posts()) : the_post(); ?>
        <h5>Custom Post Type Template</h5>
        <h1><?php the_title();?></h1>
        <?php the_content(); ?>
    <?php endwhile; endif; ?>
</main>
<?php get_template_part('partials/sidebar'); ?>
<?php get_template_part('partials/footer'); ?>
