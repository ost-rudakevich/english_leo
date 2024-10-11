import { FC } from 'react'
import styles from './Register.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import AuthField from 'components/ui/auth-fields/AuthField'
import FormButton from 'components/ui/buttons/FormButton'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { IUserData } from 'types/user.interface'
import { EMAIL_PATTERN } from 'utils/constants'
import { useAppDispatch } from 'hooks/redux-hooks'
import { useToast } from '@chakra-ui/react'
import { useAddUserDataMutation } from 'features/user/user-auth-api/userAuthApi'
import { addCurrentUser } from 'features/user/current-user-slice/currentUserSlice'
import { useAddNewDictionaryMutation } from 'features/dictionary/userDictionaryApi'

const Register: FC = () => {
  const [addUserData] = useAddUserDataMutation()
  const [addNewDictionary] = useAddNewDictionaryMutation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const toast = useToast()

  const { handleSubmit, control, reset } = useForm<IUserData>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IUserData> = async data => {
    try {
      const response = await addUserData(data).unwrap()
      await addNewDictionary(response.user.id)

      localStorage.setItem('authToken', response.accessToken)

      dispatch(addCurrentUser(response.user))
      navigate('/')
      reset()
    } catch (error: any) {
      toast({
        title: 'Не вдалось зареєструватись, спробуйте ще раз.',
        description: `Помилка: ${error.data}`,
        status: 'error',
        duration: 3000,
        position: 'bottom',
        isClosable: true
      })
    }
    reset()
  }

  return (
    <>
      <form
        noValidate
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className={styles.title}>Реєстрація</h1>

        <Controller
          control={control}
          name='username'
          rules={{
            required: "Ви повинні ввести ім'я",
            minLength: {
              value: 3,
              message: "Ім'я повинне містити не менше 2 символів"
            },
            maxLength: {
              value: 8,
              message: "Ім'я не повинне містити більше 8 символів"
            }
          }}
          render={({ field: { onChange }, fieldState: { error, isDirty } }) => (
            <AuthField
              autoComplete='off'
              type='text'
              placeholder="Введіть ваше ім'я"
              error={error}
              isDirty={isDirty}
              onChange={onChange}
            />
          )}
        />

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
          <Link to='/login'>У мене є акаунт</Link>

          {<FormButton type='submit' text='Створити акаунт' />}
        </div>
      </form>
    </>
  )
}

export default Register
