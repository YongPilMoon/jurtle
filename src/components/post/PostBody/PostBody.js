import React from 'react';
import styles from './PostBody.scss';
import classNames from 'classnames/bind';
import MarkdownRender from 'components/common/MarkdownRender';
import Paper from '@material-ui/core/Paper';

const cx = classNames.bind(styles);

const PostBody = ({ body }) => (
  <div className={cx('post-body')}>
    <Paper className={cx('paper')}>
      {body ? <MarkdownRender markdown={body} /> : <div className={cx('animated-background')}>
        <div className={cx(['background-masker', 'header-top'])} />
        <div className={cx(['background-masker', 'header-left'])} />
        <div className={cx(['background-masker', 'header-right'])} />
        <div className={cx(['background-masker', 'header-bottom'])} />
        <div className={cx(['background-masker', 'subheader-left'])} />
        <div className={cx(['background-masker', 'subheader-right'])} />
        <div className={cx(['background-masker', 'subheader-bottom'])} />
        <div className={cx(['background-masker', 'content-top'])} />
        <div className={cx(['background-masker', 'content-first-end'])} />
        <div className={cx(['background-masker', 'content-second-line'])} />
        <div className={cx(['background-masker', 'content-second-end'])} />
        <div className={cx(['background-masker', 'content-third-line'])} />
        <div className={cx(['background-masker', 'content-third-end'])} />
      </div>}
    </Paper>
  </div>
);

export default PostBody;
