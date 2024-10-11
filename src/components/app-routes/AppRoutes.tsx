import { FC } from 'react'
import { useAppSelector } from 'hooks/redux-hooks'
import PrivateRouting from './private-routing/PrivateRouting'
import PublicRounting from './public-rounting/PublicRounting'

const AppRoutes: FC = () => {
  const user = useAppSelector(store => store.currentUser.user)
  return <>{user !== null ? <PrivateRouting /> : <PublicRounting />}</>
}

export default AppRoutes
