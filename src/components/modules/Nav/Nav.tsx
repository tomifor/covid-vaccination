import React from 'react'
import styles from './Nav.module.scss'

const Nav = (): JSX.Element => {

  return (
    <nav className={styles.navContainer}>
      <h1 className={styles.logo}>CVS</h1>
    </nav>
  )
}

export default Nav
