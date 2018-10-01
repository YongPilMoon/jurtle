import React from 'react';
import styles from './PostList.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import moment from 'moment';
import removeMd from 'remove-markdown';
import _ from 'lodash';

const cx = classNames.bind(styles);

const PostItem = ({ title, body, publishedDate, tags, id }) => {
  const tagList = tags.map(
    tag => <Link key={tag} to={`/tag/${tag}`}>#{tag}</Link>
  );

  return (
    <div key={id} className={cx('post-item')}>
      <div className={cx('post-header')}>
        <h2><Link to={`/post/${id}`}>{title}</Link></h2>
        <div className={cx('date')}>{moment(publishedDate).format('ll')}</div>
      </div>
      <p>{removeMd(body)}</p>
      <div className={cx('tags')}>
        {tagList}
      </div>
    </div>
  );
};

const PostList = ({posts}) => (
  <div className={cx('post-list')}>
    { _.map(posts, (post) => {
        const { _id, title, body, publishedDate , tags } = post;
        return (
          <PostItem
            title={title}
            body={body}
            publishedDate={publishedDate}
            tags={tags}
            key={_id}
            id={_id}
          />
        )
      }
    )}
  </div>
);

export default PostList;