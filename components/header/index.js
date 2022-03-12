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
          <Link href="https://digifizzy.xyz/">
            <a className={styles.link} target="_blank">
              Digifizzy
            </a>
          </Link>
          <Link href="https://blog.digitalax.xyz">
            <a className={styles.link} target="_blank">
              Blog Updates
            </a>
          </Link>
          <Link href="https://digitalax.xyz/marketplace">
            <a className={styles.link} target="_blank">
              Marketplace
            </a>
          </Link>
          <Link href="https://www.digitalax.xyz/engineering">
            <a className={styles.link} target="_blank">R&D</a>
          </Link>
          <Link href="https://staking.digitalax.xyz">
            <a className={styles.link} target="_blank">Staking</a>
          </Link>
          <Link href="https://espa.digitalax.xyz">
            <a className={styles.link} target="_blank">Esports Platform</a>
          </Link>
        </div>
      </div>
      {hamburger ? (
        <div className={styles.mobileMenu}>
          <a
            href="https://medium.com/@digitalax"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            Blog
          </a>
          <a
            href="https://community.digitalax.xyz/"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            Forum
          </a>
          {isShowStaking && (
            <a
              href="http://staking.digitalax.xyz/"
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              {linkText}
            </a>
          )}
          <Link href="/global">
            <a className={styles.link}>Global Designer Network</a>
          </Link>
          <Link href="/bridge">
            <a className={styles.link}>Matic-Eth Bridge</a>
          </Link>
          <Link href="/swap">
            <a className={styles.link}>Token Swap</a>
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
