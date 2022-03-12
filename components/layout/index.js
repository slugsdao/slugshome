import React from 'react'
import LandingFooter from '../footer'
import HeaderTopLine from '../header'
import styles from './styles.module.scss'

const Layout = ({children, ...props}) => {
  return (
    <>
      <HeaderTopLine />
      <div className={styles.main}>
        {children}
      </div>
      <LandingFooter />
    </>
  )
}

export default Layout
