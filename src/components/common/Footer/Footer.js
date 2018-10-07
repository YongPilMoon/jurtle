import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { jurtleLogo } from 'static/image';

const cx = classNames.bind(styles);

const Footer = () => (
  <footer className={cx('footer')}>
    <Link to="/" className={cx('brand')}>
      <span className={cx('footer-logo')}>Jurtle</span>
    </Link>
  </footer>
);

export default Footer;
