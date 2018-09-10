import React from 'react';
import styles from './About.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const About = () => {
  return (
    <div className={cx('about')}>
      <input type="checkbox" className={cx('about__checkbox')} id="about-toggle"/>
      <div className={cx('about__background')} />
      <label className={cx('about__close-btn')} For="about-toggle">
        <span className={cx('about__close-btn-icon')}> </span>
      </label>
    </div>
  );
};

export default About;
