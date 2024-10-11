import { FC } from 'react'
import styles from './Login.module.scss'
import { useAppDispatch } from 'hooks/redux-hooks'
import { addCurrentUser } from 'features/user/current-user-slice/currentUserSlice'
import { useSetUserDataMutation } from 'features/user/user-auth-api/userAuthApi'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { IUserLoginData } from 'types/user.interface'
import { EMAIL_PATTERN } from 'utils/constants'
import AuthField from 'components/ui/auth-fields/AuthField'
import FormButton from 'components/ui/buttons/FormButton'
import { useToast } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Login: FC = () => {
  const [setUser] = useSetUserDataMutation()
  const dispatch = useAppDispatch()
  const toast = useToast()

  const { handleSubmit, control, reset } = useForm<IUserLoginData>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IUserLoginData> = async data => {
    try {
      const response = await setUser(data).unwrap()

      dispatch(addCurrentUser(response.user))

      localStorage.setItem('authToken', response.accessToken)

      reset()
    } catch (error: any) {
      toast({
        title: 'Не вдалось увійти, спробуйте ще раз.',
        description: `Помилка: ${error.data}`,
        status: 'error',
        duration: 3000,
        position: 'bottom',
        isClosable: true
      })
    }
  }

  return (
    <>
      <form
        noValidate
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className={styles.title}>Увійдіть у свій акаунт</h1>

        <Controller
          control={control}
          name='email'
          rules={{
            required: 'Ви повинні ввести електронну почту',
            pattern: {
              value: EMAIL_PATTERN,
              message: 'Введіть існуючу електронну почту'
            }
          }}
          render={({ field: { onChange }, fieldState: { error, isDirty } }) => (
            <AuthField
              autoComplete='off'
              type='email'
              placeholder='Введіть вашу елекронну почту'
              error={error}
              isDirty={isDirty}
              onChange={onChange}
            />
          )}
        />

        <Controller
          control={control}
          name='password'
          rules={{
            required: 'Ви повинні ввести пароль',
            minLength: {
              value: 6,
              message: 'Пароль повинен містити не менше 6 символів'
            }
          }}
          render={({ field: { onChange }, fieldState: { error, isDirty } }) => (
            <AuthField
              autoComplete='off'
              type='password'
              placeholder='Введіть ваш пароль'
              error={error}
              isDirty={isDirty}
              onChange={onChange}
            />
          )}
        />

        <div className={styles.login}>
          <Link to='/register'>Створити акаунт</Link>
          {<FormButton type='submit' text='Увійти' />}
        </div>
      </form>
    </>
  )
}

export default Login
