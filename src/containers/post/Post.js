import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import PostInfo from 'components/post/PostInfo';
import PostBody from 'components/post/PostBody';
import { getPost, initPost } from '../../store/reducers/post';

class Post extends Component {
  initialize = () => {
    const { getPost, id } = this.props;
    getPost(id);
  };

  componentDidMount() {
    this.initialize();
  }

  componentWillUnmount() {
    this.props.initPost();
  }

  render() {
    const { post } = this.props;
    const { title, body, publishedDate, tags } = post.toJS();

    return (
      <Fragment>
        <Helmet>
          <title>{`${title} :: jurtle`}</title>
        </Helmet>
        <div>
          <PostInfo title={title} publishedDate={publishedDate} tags={tags} />
          <PostBody body={body} />
        </div>
      </Fragment>
    );
  }
}

Post.propTypes = {};

const mapDispatchToProps = dispatch => ({
  getPost: id => dispatch(getPost(id)),
  initPost: () => dispatch(initPost()),
});

export default connect(
  state => ({
    post: state.post.get('post'),
  }), mapDispatchToProps)(Post);
