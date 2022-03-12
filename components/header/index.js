import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';
import cn from 'classnames';
import Link from 'next/link';

import Logo from './logo';
import styles from './styles.module.scss';

const HeaderTopLine = ({ className, isShowStaking, buttonText, linkText }) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isCollapse, setIsCollapse] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const offset = 0;
      const { scrollTop } = document.documentElement;
      const scrolled = scrollTop > offset;

      if (hasScrolled !== scrolled) {
        setHasScrolled(scrolled);
      }
    }, 200);

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled]);

  return (
    <div
      className={cn(
        className,
        styles.wrapper,
        hasScrolled ? styles.floatingNav : ''
      )}
    >
      <div className={styles.leftBox}>
        <Logo black={false} />
      </div>
      <div className={styles.rightBox}>
        <div className={cn(styles.links, isCollapse ? styles.expandedMenu : '')}>
          <Link href="https://docs.slugsdao.xyz/">
            <a className={styles.link} target="_blank">
              Documentation
            </a>
          </Link>
          <Link href="">
            <a className={styles.link} target="_blank">
              Events
            </a>
          </Link>
          <Link href="">
            <a className={styles.link} target="_blank">
              Calendar
            </a>
          </Link>
          <Link href="https://www.digitalax.xyz/engineering">
            <a className={styles.link} target="_blank">
            Web3 Syncopation Residency
              </a>
          </Link>
        </div>
      </div>
      {hamburger ? (
        <div className={styles.mobileMenu}>
      <Link href="https://docs.slugsdao.xyz/">
            <a className={styles.link} target="_blank">
              Documentation
            </a>
          </Link>
          <Link href="">
            <a className={styles.link} target="_blank">
              Events
            </a>
          </Link>
          <Link href="">
            <a className={styles.link} target="_blank">
              Calendar
            </a>
          </Link>
          <Link href="https://docs.slugsdao.xyz/core-form/web3-syncopation-residency">
            <a className={styles.link} target="_blank">
              Web3 Syncopation Residency
            </a>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

HeaderTopLine.propTypes = {
  className: PropTypes.string,
  isShowStaking: PropTypes.bool,
  buttonText: PropTypes.string,
  linkText: PropTypes.string,
};

HeaderTopLine.defaultProps = {
  className: '',
  isShowStaking: false,
  buttonText: 'SIGN IN',
  linkText: 'Staking',
};

export default HeaderTopLine;
