import React from 'react'
import styles from './Nav.module.scss'
import { useRouter } from 'next/router'

const Nav = (): JSX.Element => {
  const router = useRouter()
  return (
    <nav className={styles.navContainer}>
      <h1 className={styles.logo} onClick={() => router.push('/')}>CVS</h1>
    </nav>
  )
}

export default Nav
