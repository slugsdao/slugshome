import React from 'react';
import styles from './styles.module.scss';

const LandingFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.heading}>Slugs' Saloon</div>
        <div className={styles.description}>
        Slugs is a remanifestation of the original spirit of Slugs’ Saloon, one of the most formative Jazz cultural destinations throughout the 60s & 70s. 
        </div>
        <div className={styles.centerWrapper}>
          <div className={[styles.dFlex, styles.aboutLine].join(' ')}>
            <a href="https://twitter.com/slugsdao" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a href="" target="_blank" rel="noreferrer">
              Discord
            </a>
            <a href="https://github.com/slugsdao" target="_blank" rel="noreferrer">
              Github
            </a>
            <a href="https://docs.slugsdao.xyz/" target="_blank" rel="noreferrer">
              Documentation
            </a>
            <a href="https://slugsdao.medium.com/" target="_blank" rel="noreferrer">
              Medium
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
