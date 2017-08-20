import { addInstagramImages, fetchPosts } from './actions/actions';
import fetch from 'isomorphic-fetch';

const initialDispatch = store => {

	fetch('http://localhost/api/instagram.php').then(response => response.json()).then(json => store.dispatch(addInstagramImages(json.items)));
	store.dispatch(fetchPosts('feature?per_page=100'));
	store.dispatch(fetchPosts('project?per_page=100'));
	store.dispatch(fetchPosts('pages?slug=about'));
	// store.dispatch(fetchArchives(20, 1));
}

export default initialDispatch;