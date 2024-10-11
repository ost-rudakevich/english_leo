import { FC } from 'react'
import styles from './Sidebar.module.scss'
import Navigation from './Navigation/Navigation'
import Logout from './Logout/Logout'
import { useAppSelector } from 'hooks/redux-hooks'

const Sidebar: FC = () => {
  const user = useAppSelector(store => store.currentUser.user)
  return (
    <aside className={styles.sidebar}>
      <Navigation />
      {user && <Logout />}
    </aside>
  )
}

export default Sidebar
