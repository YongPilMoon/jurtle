import React from 'react';
import _ from 'lodash';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Category.scss';

const cx = classNames.bind(styles);

const Category = ({ categories }) => (
  <div className={cx('category-wrapper')}>
    <NavLink to={'/'} activeClassName={cx('active')} exact className={cx('category-item')}>
        All
    </NavLink>
    {_.map(categories, category =>
      (<NavLink
        to={`/tag/${category.toLowerCase()}`}
        key={category}
        activeClassName={cx('active')}
        className={cx('category-item')}
      >
        {category}
      </NavLink>))}
  </div>
);

export default Category;
