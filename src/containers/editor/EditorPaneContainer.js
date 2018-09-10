import React, { Component } from 'react';
import EditorPane from '../../components/editor/EditorPane';
import { connect } from 'react-redux';
import { changeInput } from "../../store/actionCreators/editor";

class EditorPaneContainer extends Component {
  handleChangeInput = ({name, value}) => {
    const { changeInput } = this.props;
    changeInput({name, value});
  };

  render() {
    const { title, tags, markdown } = this.props;
    const { handleChangeInput } = this;

    return (
      <EditorPane
        title={title}
        markdown={markdown}
        tags={tags}
        onChangeInput={handleChangeInput}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeInput: (payload) => dispatch(changeInput(payload))
});

export default connect(
  (state) => ({
    title: state.editor.get('title'),
    markdown: state.editor.get('markdown'),
    tags: state.editor.get('tags')
  }), mapDispatchToProps
)(EditorPaneContainer);
