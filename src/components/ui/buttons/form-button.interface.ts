import { MouseEvent } from 'react'

export interface IFormButtonProps {
  text: string
  type?: 'submit' | 'button'
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}
