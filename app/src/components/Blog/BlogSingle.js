import React from 'react'
const moment = require('moment');
import ImageList from '../Single/SingleImageList';

const BlogSingle = ({blog}) => {

	const title = blog.title.rendered;
	const date = moment(blog.date).format('dddd MMMM DD');

	return (
		<section className="grid grid--blog">
			<header className="content__header">
				<p className="content__title">{title}</p>
				<p className="content__date">
					<span className="content__date-lead">Posted on </span>
					<span className="content__date-time">{date}</span>
				</p>
			</header>
			<div className="grid content__body">
				<p className="content__copy content__copy--indent" dangerouslySetInnerHTML={{__html: blog.acf.blog_content}}>
				</p>
				<div className="content__images">
					<ImageList images={blog.acf.images}/>
				</div>
			</div>
		</section>
	)
}

export default BlogSingle;