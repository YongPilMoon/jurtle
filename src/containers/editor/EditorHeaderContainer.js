import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import EditorHeader from '../../components/editor/EditorHeader';
import * as editorActions from '../../store/reducers/editor';
import { queryParser } from '../../helper';

class EditorHeaderContainer extends Component {
  componentDidMount() {
    const { initialize, location } = this.props;
    initialize(); // 에디터를 초기화 합니다.

    const { id } = queryParser(location.search);
    if (id) {
      this.props.getPost(id);
    }
  }

  handleGoBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  handleSubmit = async () => {
    const { title, markdown, tags,
      writePost, editPost, history, location, mainImg, published } = this.props;
    const post = {
      title,
      body: markdown,
      // 태그 텍스트를 , 로 분리시키고 앞뒤 공백을 지운 후 중복 되는 값을 제거해줍니다.
      tags: tags === '' ? [] : [...new Set(tags.split(',').map(tag => tag.trim()))],
      mainImg,
      published,
    };
    try {
      const { id } = queryParser(location.search);

      if (id) {
        await editPost({ id, ...post });
        history.push(`/post/${id}`);
        return;
      }
      await writePost(post);
      // 페이지를 이동시킵니다. 주의: postId 를 상단에서 레퍼런스를 만들지 않고
      // 이 자리에서 this.props.postId 를 조회해주어야합니다. (현재의 값을 불러오기 위함)
      history.push(`/post/${this.props.postId}`);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { handleGoBack, handleSubmit } = this;
    const { id } = queryParser(this.props.location.search);
    return (
      <EditorHeader
        onGoBack={handleGoBack}
        onSubmit={handleSubmit}
        isEdit={id ? true : !!id}
      />
    );
  }
}

EditorHeaderContainer.propTypes = {
  initialize: PropTypes.func.isRequired,
  location: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
  initialize: () => dispatch(editorActions.initialize()),
  writePost: post => dispatch(editorActions.writePost(post)),
  getPost: id => dispatch(editorActions.getPost(id)),
  editPost: post => dispatch(editorActions.editPost(post)),
});

export default connect(
  state => ({
    title: state.editor.get('title'),
    markdown: state.editor.get('markdown'),
    tags: state.editor.get('tags'),
    mainImg: state.editor.get('mainImg'),
    postId: state.editor.get('postId'),
    published: state.editor.get('published'),
  }),
  mapDispatchToProps,
)(withRouter(EditorHeaderContainer));
