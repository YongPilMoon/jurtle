import React from 'react';
import styles from './PostBody.scss';
import classNames from 'classnames/bind';
import MarkdownRender from 'components/common/MarkdownRender';
import Paper from '@material-ui/core/Paper';

const cx = classNames.bind(styles);

const PostBody = ({ body }) => (
  <div className={cx('post-body')}>
    <Paper className={cx('paper')}>
      <MarkdownRender markdown={body} />
    </Paper>
  </div>
);

export default PostBody;
