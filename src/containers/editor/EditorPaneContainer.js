import React, { Component } from 'react';
import EditorPane from '../../components/editor/EditorPane';
import { connect } from 'react-redux';
import { changeInput, changePublished } from '../../store/reducers/editor';

class EditorPaneContainer extends Component {
  handleChangeInput = ({ name, value }) => {
    const { changeInput } = this.props;
    changeInput({ name, value });
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

const mapDispatchToProps = dispatch => ({
  changeInput: payload => dispatch(changeInput(payload)),
  changePublished: payload => dispatch(changePublished(payload)),
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
