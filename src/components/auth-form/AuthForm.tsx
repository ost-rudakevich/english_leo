import { FC } from 'react'
import styles from './AuthForm.module.scss'
import { useLocation } from 'react-router-dom'
import Register from './register/Register'
import Login from './login/Login'

const AuthForm: FC = () => {
  const { pathname } = useLocation()

  return (
    <div className={styles.container}>
      {pathname === '/register' ? <Register /> : <Login />}

      <form noValidate></form>
    </div>
  )
}

export default AuthForm
