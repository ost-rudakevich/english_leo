import { FC } from 'react'
import styles from './Error.module.scss'
import { IoReload } from 'react-icons/io5'

const Error: FC = () => {
  return (
    <div className={styles['wrapper-error']}>
      <div className={styles.error}>
        <span className={styles.message}>Error</span>
        <div
          onClick={() => window.location.reload()}
          className={styles['error-container']}
        >
          <IoReload />
          <span>Reload</span>
        </div>
      </div>
    </div>
  )
}

export default Error
