import React, { Component, Fragment } from 'react';
import PostList from '../../components/list/PostList';
import { connect } from 'react-redux';
import { getPostList } from '../../store/reducers/list';


class ListContainer extends Component {
  componentDidMount() {
    this.dispatchGetPostList();
  }

  dispatchGetPostList = () => {
    const { tag, page, getPostList } = this.props;
    getPostList({
      page,
      tag,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.page !== this.props.page || prevProps.tag !== this.props.tag) {
      this.dispatchGetPostList();
      document.documentElement.scrollTop = 0;
    }
  }

  render() {
    const { posts, loading, logged } = this.props;
    return (
      <Fragment>
        <PostList posts={posts} loading={loading} logged={logged} />
        {/*<Pagination page={page} lastPage={lastPage} tag={tag} />*/}
      </Fragment>
    );
  }
}

ListContainer.propTypes = {};

const mapStateToProps = state => ({
  lastPage: state.list.get('lastPage'),
  posts: state.list.get('posts').toJS(),
  loading: state.list.get('loading'),
  logged: state.base.get('logged'),
});

const mapDispatchToProps = dispatch => ({
  getPostList: payload => dispatch(getPostList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
