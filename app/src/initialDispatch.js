import { addInstagramImages, fetchPosts, markLoaded } from './actions/actions';
import fetch from 'isomorphic-fetch';

const initialDispatch = store => {

	const baseUrl = process.env.NODE_ENV !== 'production' ? `http://localhost/api` : '/api';

	fetch(`${baseUrl}/instagram.php`).then(response => response.json()).then(json => store.dispatch(addInstagramImages(json)));
	store.dispatch(fetchPosts('feature?per_page=100'));
	store.dispatch(fetchPosts('project?per_page=100'));
	store.dispatch(fetchPosts('pages?slug=about'));
	store.dispatch(fetchPosts('pages?slug=landing'));

	window.isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints;

	setTimeout(() => {

		if(window.location.pathname !== '/') {
			store.dispatch(markLoaded());
		}
	}, 1000);
}

export default initialDispatch;
