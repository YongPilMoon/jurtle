import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import moment from 'moment';
import removeMd from 'remove-markdown';
import _ from 'lodash';
import { css } from 'react-emotion';
import { BeatLoader } from 'react-spinners';
import styles from './PostList.scss';

const cx = classNames.bind(styles);

const PostItem = ({ title, body, publishedDate, tags, id, mainImg }) => {
  const tagList = tags.map(
    tag => <Link key={tag} to={`/tag/${tag}`}>#{tag}</Link>,
  );

  return (
    <div key={id} className={cx('post-item')}>
      <div className={cx('content')}>
        <div className={cx('post-header')}>
          <Link to={`/post/${id}`}>
            <h2>{title}</h2>
          </Link>
          <div className={cx('date')}>{moment(publishedDate).format('ll')}</div>
        </div>
        <p className={cx('post-description')}>{removeMd(body)}</p>
        <div className={cx('tags')}>
          {tagList}
        </div>
      </div>
      <div className={cx('thumbnail-box')} style={{ backgroundImage: `url(${mainImg})` }} />
    </div>
  );
};

const override = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
`;

const PostList = ({ posts, loading }) => (
  loading ? <BeatLoader className={override} /> : <div className={cx('post-list')}>
    { _.map(posts, (post) => {
      const { _id, title, body, publishedDate, tags, mainImg } = post;
      return (
        <PostItem
          title={title}
          body={body}
          publishedDate={publishedDate}
          mainImg={mainImg}
          tags={tags}
          key={_id}
          id={_id}
        />
      );
    },
    )}
  </div>
);

export default PostList;
