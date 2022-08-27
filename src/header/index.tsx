import { Link } from 'react-router-dom'
import styles from './header.module.scss'

function Header() {
  return (
    <header className={styles.headerComponent}>
        <Link to={'/'} className={styles.headerLink}>React App</Link>
        <Link to={'/newPost'} className={styles.headerLink}>New Post</Link>
    </header>
  )
}

export default Header