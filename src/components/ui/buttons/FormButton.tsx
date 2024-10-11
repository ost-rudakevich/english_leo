import { FC } from 'react'
import styles from './FormButton.module.scss'
import { IFormButtonProps } from './form-button.interface'

const FormButton: FC<IFormButtonProps> = ({ text, type, onClick }) => {
  return (
    <button type={type} className={styles.btn} onClick={onClick}>
      {text}
    </button>
  )
}

export default FormButton
