import { IDictionary, IDictionaryData } from 'types/dictionary.interface'

export type TUpdateDictionary = (
  userDictionaryData: IDictionary,
  wordData: IUpdateDictionaryProps,
  typeOfButton: string
) => IDictionary

interface IUpdateDictionaryProps
  extends Omit<IDictionaryData, 'id' | 'wordLearningProgress'> {}
