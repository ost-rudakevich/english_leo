import { IWordData } from 'types/dictionary.interface'

export interface ITranslatorCardProps {
  isFetchingWord: boolean
  validateResult: IValidateResult
}

interface IValidateResult {
  isValid: boolean
  type: string
  message: string
  data: IWordData
}
