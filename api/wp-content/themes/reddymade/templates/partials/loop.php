<?php if(have_posts()) : while(have_posts()) : the_post(); ?>
    <article role="article">
        <h1><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
        <div><?php the_excerpt(); ?></div>
    </article>
<?php endwhile; ?>
<?php else : ?>
    <article role="article">
        <h1>Sorry</h1>
        <p>No posts have been published just yet.</p>
    </article>
<?php endif; ?>
