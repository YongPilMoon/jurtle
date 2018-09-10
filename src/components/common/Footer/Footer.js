import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { jurtleLogo } from 'static/image';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <Link to="/" className={cx('brand')}>
        <img  className={cx('footer-logo')} src={jurtleLogo} alt="jurtle logo"/>
      </Link>
    </footer>
  );
};

export default Footer;
