import { FC } from 'react'
import styles from './Logout.module.scss'
import { BiLogOut } from 'react-icons/bi'
import { persistStore } from 'redux-persist'
import { store } from 'features/store'
import { useNavigate } from 'react-router-dom'

const Logout: FC = () => {
  const navigate = useNavigate()

  const logOut = () => {
    localStorage.removeItem('authToken')
    persistStore(store).purge()
    navigate('/')
    window.location.reload()
  }

  return (
    <div className={styles.wrapper}>
      <button onClick={logOut} className={styles.logout}>
        <BiLogOut />
        <span>Logout</span>
      </button>
    </div>
  )
}

export default Logout
