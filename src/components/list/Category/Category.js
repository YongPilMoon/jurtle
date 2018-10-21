import React from 'react';
import _ from 'lodash';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Category.scss';
import { imageStore } from '../../../config';

const cx = classNames.bind(styles);

const Category = ({ categories }) => (
  <div className={cx('category-wrapper')}>
    <div className={cx('nav-wrapper')}>
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
    <a className={cx('github')} href="https://github.com/YongPilMoon" target="_blank">
      <img
        className={cx('github-img')}
        src={`${imageStore}github.png`}
        alt="github"
      />
    </a>
  </div>
);

export default Category;
