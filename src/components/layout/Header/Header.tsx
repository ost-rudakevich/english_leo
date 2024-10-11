import { FC } from 'react'
import styles from './Header.module.scss'
import User from './User/User'
import LOGO from 'assets/logo/logo.svg'

const Header: FC = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <img src={LOGO} alt='Logo' />
      <div className={styles.name}>
        Google
        <span className={styles.h}> Translate</span>
      </div>
    </div>
    <User />
  </header>
)

export default Header
