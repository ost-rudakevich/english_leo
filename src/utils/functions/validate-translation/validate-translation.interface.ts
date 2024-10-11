import { IWordData } from 'types/dictionary.interface'

export type TValidateTranslation = (
  originalWord: string,
  translatedWord: string
) => { isValid: boolean; type: string; message: string; data: IWordData }
