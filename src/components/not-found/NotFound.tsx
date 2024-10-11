import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux-hooks'

const NotFound: FC = () => {
  const user = useAppSelector(store => store.currentUser.user)

  if (user === null) {
    return <Navigate to={'/login'} />
  }

  return <Navigate to={'/'} />
}

export default NotFound
