import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EditorPane from '../../components/editor/EditorPane';
import * as editorActions from '../../store/reducers/editor';


class EditorPaneContainer extends Component {
  handleChangeInput = ({ name, value }) => {
    this.props.changeInput({ name, value });
  };

  render() {
    const { title, tags, markdown, mainImg, published, changePublished } = this.props;
    const { handleChangeInput } = this;

    return (
      <EditorPane
        title={title}
        markdown={markdown}
        tags={tags}
        mainImg={mainImg}
        published={published}
        onChangeInput={handleChangeInput}
        changePublished={changePublished}
      />
    );
  }
}

EditorPaneContainer.propTypes = {
  changePublished: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  markdown: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  mainImg: PropTypes.string.isRequired,
  published: PropTypes.bool.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeInput: payload => dispatch(editorActions.changeInput(payload)),
  changePublished: payload => dispatch(editorActions.changePublished(payload)),
});

export default connect(
  state => ({
    title: state.editor.get('title'),
    markdown: state.editor.get('markdown'),
    tags: state.editor.get('tags'),
    mainImg: state.editor.get('mainImg'),
    published: state.editor.get('published'),
  }), mapDispatchToProps,
)(EditorPaneContainer);
