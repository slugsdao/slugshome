import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';
import cn from 'classnames';
import Link from 'next/link';

import Logo from './logo';
import styles from './styles.module.scss';

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={styles.wrapper}>
      <div className={styles.leftBox}>
        <Logo black={false} />
      </div>
        <div className={styles.links}>
          <a href="https://docs.slugsdao.xyz//" className={styles.link} target="_blank" rel="noreferrer">
            Documentation
          </a>
          <a href="" className={styles.link} target="_blank" rel="noreferrer">
            Events
          </a>
          <a href="" className={styles.link} target="_blank" rel="noreferrer">
            Calendar
          </a>
          <a href="https://docs.slugsdao.xyz/core-form/web3-syncopation-residency" className={styles.link} target="_blank" rel="noreferrer">
            Web3 Syncopation Residency
          </a>
        </div>
        <button className={styles.mobileBtn} onClick={() => setShow(!show)}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
      {show && (
        <div className={styles.mobileWrapper}>
          <div className={styles.links}>
            <a href="https://docs.slugsdao.xyz/" className={styles.link} target="_blank" rel="noreferrer">
              Documentation
            </a>
            <a href="" className={styles.link} target="_blank" rel="noreferrer">
              Events
            </a>
            <a href="" className={styles.link} target="_blank" rel="noreferrer">
              Calendar
            </a>
            <a href="https://docs.slugsdao.xyz/core-form/web3-syncopation-residency" className={styles.link} target="_blank" rel="noreferrer">
              Web3 Syncopation Residency
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;







    /*

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
      <button className={styles.mobileBtn} onClick={() => setShow(!show)}>
      <div></div>
      <div></div>
      <div></div>
    </button>
  </div>
  {show && (
    <div className={styles.mobileWrapper}>
      <div className={styles.links}>
        <a href="https://docs.f3manifesto.xyz" className={styles.link} target="_blank" rel="noreferrer">
          DOCUMENTATION
        </a>
        <a href="https://docs.f3manifesto.xyz/web3-fashion-manifesto/map" className={styles.link} target="_blank" rel="noreferrer">
          Web3 Fashion manifesto
        </a>
        <a href="https://mirror.xyz/f3manifesto.eth" className={styles.link} target="_blank" rel="noreferrer">
          Sub-thread weekly
        </a>
        <a href="https://themanifest.f3manifesto.xyz/" className={styles.link} target="_blank" rel="noreferrer">
          The Manifest Gallery
        </a>
        <a href="https://web3cc0openlibrary.f3manifesto.xyz/" className={styles.link} target="_blank" rel="noreferrer">
          Web3 CC0 Open Library
        </a>
      </div>
    </div>
  )}
  </>
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
*/