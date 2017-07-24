import React from 'react';
import Logo from '../Logo/Logo';
import BlogSingle from './BlogSingle';
import Loading from '../Loading/Loading';

const Blog = ({blogs}) => {
	if(blogs.length === 0){return <Loading/>}

	const blogList = blogs.map(blog => <BlogSingle blog={blog} />);

	return (
		<div className="grid">
			<Logo/>
			<main className="content--blog">
				{blogList}
			</main>
		</div>
	)
}

export default Blog;