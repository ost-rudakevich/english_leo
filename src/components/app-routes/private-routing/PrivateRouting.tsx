import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from 'components/home/Home'
import Layout from 'components/layout/Layout'
import Dictionary from 'components/dictionary/Dictionary'
import MyProfile from 'components/my-profile/MyProfile'
import NotFound from 'components/not-found/NotFound'

const PrivateRouting: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/dictionary' element={<Dictionary />} />
        <Route path='/profile' element={<MyProfile />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default PrivateRouting
