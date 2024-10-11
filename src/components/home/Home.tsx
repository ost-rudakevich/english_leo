import { useAppSelector } from 'hooks/redux-hooks'
import { FC } from 'react'

const Home: FC = () => {
  const userId = useAppSelector(store => store.currentUser.user)
  return <div>{userId ? userId.id : 'No'}</div>
}

export default Home
