import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from 'components/layout/Layout'
import Home from 'components/home/Home'
import NotFound from 'components/not-found/NotFound'
import AuthForm from 'components/auth-form/AuthForm'

const PublicRounting: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path='/dictionary' element={<AuthForm />} />
      <Route path='/practice' element={<AuthForm />} />
      <Route path='/profile' element={<AuthForm />} />
      <Route path='/register' element={<AuthForm />} />
      <Route path='/login' element={<AuthForm />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default PublicRounting
