import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const LandingFooter = () => {
  const screenWidth = useWindowDimensions().width;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    screenWidth > 376 ? setIsMobile(false) : setIsMobile(true);
  }, [screenWidth]);

  return (
    <footer className={styles.footer}>
      <div className={styles.body}>
        <div className={styles.logo}>Slugs' Saloon</div>
        <div className={styles.text}>
        Slugs is a remanifestation of the original spirit of Slugs’ Saloon, one of the most formative Jazz cultural destinations throughout the 60s & 70s.
        </div>
      </div>
      <div className={styles.links}>
        <a href="https://twitter.com/slugsdao" target="_blank" rel="noreferrer">
          Twitter
        </a>
        <a href="" target="_blank" rel="noreferrer">
          Discord
        </a>
        <a href="https://github.com/slugsdao" target="_blank" rel="noreferrer">
          Github
        </a>
        <a href="https://docs.slugsdao.xyz" target="_blank" rel="noreferrer">
          Documentation
        </a>
        <a href="https://slugsdao.medium.com" target="_blank" rel="noreferrer">
          Medium
        </a>
      </div>
    </footer>
  );
};

export default LandingFooter;
