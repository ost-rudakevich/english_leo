import { ChangeEvent } from 'react'
import { FieldError } from 'react-hook-form'

export interface IFieldsProps {
  type: string
  placeholder: string
  autoComplete?: string
  error: FieldError | undefined
  isDirty: boolean
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}
