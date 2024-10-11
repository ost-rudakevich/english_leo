import { FC } from 'react'
import styles from './User.module.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks'
import { persistStore } from 'redux-persist'
import axios from 'axios'
import { store } from 'features/store'
import { SiHappycow } from 'react-icons/si'

const User: FC = () => {
  const isUser = useAppSelector(item => item.currentUser.user)
  const dispatch = useAppDispatch()

  const navigate = useNavigate()
  const logOut = () => {
    localStorage.removeItem('authToken')
    persistStore(store).purge()
    navigate('/')
    window.location.reload()
  }

  // logOut()

  // const [m] = useSetUserDataMutation()
  // const g = async () => {
  //   try {
  //     const response = await m({
  //       email: 'ostap@dd.dd',
  //       password: ''
  //     })

  //     console.log(response)

  //     // dispatch(addCurrentUser(response.data))

  //     // Извлекаем токен из ответа
  //     // const token = response.data.accessToken

  //     // console.log(token)

  //     // localStorage.setItem('authToken', token);

  //     // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  //   } catch (error) {
  //     // Обрабатываем ошибку аутентификации
  //     // console.error('Ошибка входа:', error)
  //   }
  // }

  return (
    <div className={styles.user}>
      {isUser ? (
        <div className={styles.logged}>
          <SiHappycow />
          <div className={styles.info}>
            <span>{isUser.username}</span>
            <span className={styles.rank}>Початківець</span>
          </div>
        </div>
      ) : (
        <div className={styles['not-logged']}>
          <NavLink className={styles.login} to='/login'>
            Login
          </NavLink>
          <NavLink className={styles.register} to='/register'>
            Register
          </NavLink>
        </div>
      )}
      {/* <button onClick={g}>f</button> */}
    </div>
  )
}

export default User
