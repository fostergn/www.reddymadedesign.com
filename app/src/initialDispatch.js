import { addInstagramImages, fetchPosts } from './actions/actions';
import fetch from 'isomorphic-fetch';

const initialDispatch = store => {

	const baseUrl = process.env.NODE_ENV !== 'production' ? `http://localhost/api` : '/api';

	fetch(`${baseUrl}/instagram.php`).then(response => response.json()).then(json => store.dispatch(addInstagramImages(json.items)));
	store.dispatch(fetchPosts('feature?per_page=100'));
	store.dispatch(fetchPosts('project?per_page=100'));
	store.dispatch(fetchPosts('pages?slug=about'));
	store.dispatch(fetchPosts('pages?slug=landing'));
}

export default initialDispatch;