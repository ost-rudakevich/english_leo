import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

const Layout: FC = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.outlet}>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
