import { connect } from 'react-redux';
import Blog from './Blog';

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const BlogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);

export default BlogContainer;
