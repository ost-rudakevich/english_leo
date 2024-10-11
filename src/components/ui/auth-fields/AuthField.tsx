import { FC, useState } from 'react'
import styles from './AuthField.module.scss'
import { IFieldsProps } from './auth-field.interface'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

const AuthField: FC<IFieldsProps> = ({
  type,
  autoComplete,
  placeholder,
  error,
  onChange,
  value,
  isDirty
}) => {
  const [eye, setEye] = useState<boolean>(false)

  const getClassName = (error: boolean, isDirty: boolean) => {
    if (error) {
      return '_error'
    } else if (isDirty) {
      return '_success'
    }
    return ''
  }

  return (
    <div className={styles.container}>
      {type === 'password' ? (
        <div className={styles.wrapper}>
          <input
            className={styles[`field${getClassName(Boolean(error), isDirty)}`]}
            type={eye ? 'text' : 'password'}
            placeholder={placeholder}
            autoComplete={autoComplete}
            onChange={onChange}
            value={value}
          ></input>
          <span className={styles.eye} onClick={() => setEye(!eye)}>
            {eye ? <AiFillEye /> : <AiFillEyeInvisible />}
          </span>
        </div>
      ) : (
        <input
          className={styles[`field${getClassName(Boolean(error), isDirty)}`]}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={onChange}
          value={value}
        ></input>
      )}
      {error !== undefined && <span>{error.message}</span>}
    </div>
  )
}

export default AuthField
