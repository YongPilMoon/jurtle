import React, { Component } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

// CodeMirror를 위한 CSS 스타일
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

import 'codemirror/mode/markdown/markdown'; // 마크다운 문법 색
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';
import 'codemirror/mode/shell/shell';
import { Controlled as CodeMirror } from 'react-codemirror2';


import styles from './EditorPane.scss';


const cx = classNames.bind(styles);

class EditorPane extends Component {
    handleChange = (e) => {
      const { onChangeInput } = this.props;
      const { value, name } = e.target;
      onChangeInput({ name, value });
    };

    handlePublishedChange = (value) => {
      this.props.changePublished(value);
    };

    render() {
      const { handleChange, handlePublishedChange } = this;
      const { title, markdown, tags, mainImg, published } = this.props;

      return (
        <div className={cx('editor-pane')}>
          <input
            className={cx('title')} placeholder="제목을 입력하세요" name="title" value={title}
            onChange={handleChange}
          />
          <CodeMirror
            className={cx('code-editor')}
            value={markdown}
            options={{
              mode: 'markdown',
              theme: 'monokai',
              lineNumbers: true,
              lineWrapping: true,
            }}
            onBeforeChange={(editor, data, value) => {
              this.props.onChangeInput({ name: 'markdown', value });
            }}
          />
          <div className={cx('input-wrapper')}>
            <label className={cx('description')} htmlFor="published">Published</label>
            <input
              name="published" type="radio" id="published" onChange={() => handlePublishedChange(true)}
              checked={published}
            />
            <label className={cx('description')} htmlFor="NoPublished">No Published</label>
            <input
              name="published" type="radio" id="NoPublished" onChange={() => handlePublishedChange(false)}
              checked={!published}
            />
          </div>
          <div className={cx('input-wrapper')}>
            <div className={cx('description')}>메인 이미지</div>
            <input name="mainImg" placeholder="메인 이미지 URL을 입력하세요" value={mainImg} onChange={handleChange} />
          </div>
          <div className={cx('input-wrapper')}>
            <div className={cx('description')}>태그</div>
            <input name="tags" placeholder="태그를 입력하세요 (쉼표로 구분)" value={tags} onChange={handleChange} />
          </div>
        </div>
      );
    }
}

EditorPane.propTypes = {
  changePublished: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  markdown: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  mainImg: PropTypes.string.isRequired,
  published: PropTypes.bool.isRequired,
};

export default EditorPane;
