import React from 'react';
import styles from './ListWrapper.scss';
import classNames from 'classnames/bind';
import ShowMoreButton from 'components/common/ShowMoreButton';

const cx = classNames.bind(styles);

const ListWrapper = ({ children }) => (
  <div className={cx('list-wrapper')}>
    {children}
    <ShowMoreButton />
  </div>
);

export default ListWrapper;
