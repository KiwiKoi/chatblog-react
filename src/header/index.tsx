import React from 'react'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.headerComponent}>
        <h1 className={styles.headerTitle}>React App</h1>
    </header>
  )
}

export default Header