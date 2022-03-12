import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import cn from 'classnames';
import styles from './styles.module.scss';

const Logo = ({ className, black }) => (
  <Link href="https://slugsdao.xyz">
    <a className={cn(className, styles.wrapper)}>
      <p className={styles.logo} style={{ color: black ? 'black' : 'white' }}>
        {' '}
        Slugs{' '}
      </p>
    </a>
  </Link>
);

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: '',
};

export default memo(Logo);
