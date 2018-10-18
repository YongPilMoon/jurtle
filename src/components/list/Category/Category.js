import React from 'react';
import _ from 'lodash';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Category.scss';
import github from "../../../static/image/github.png";

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
      <img className={cx('github-img')}src={github} alt="github" />
    </a>
  </div>
);

export default Category;
