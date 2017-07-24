<?php
/**
 * Page Template
 *
 * This is the 'default' page template.
 *
 * @package Carbon
 * @subpackage Templates
 * @since 2.0.0
 */
?>

<?php get_template_part('partials/header'); ?>
<main role="main">
    <?php if(have_posts()) : while(have_posts()) : the_post(); ?>
        <h5>Page Template</h5>
        <h1><?php the_title();?></h1>
        <?php the_content(); ?>
    <?php endwhile; endif; ?>
</main>
<?php get_template_part('partials/sidebar'); ?>
<?php get_template_part('partials/footer'); ?>
