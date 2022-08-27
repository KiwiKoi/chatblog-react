import styles from './header.module.scss'

function Header() {
  return (
    <header className={styles.headerComponent}>
        <p className={styles.headerTitle}>React App</p>
    </header>
  )
}

export default Header