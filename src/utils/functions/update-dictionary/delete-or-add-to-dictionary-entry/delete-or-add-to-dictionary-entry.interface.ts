import { IDictionaryData } from 'types/dictionary.interface'

export type TDeleteOrAddToDictionaryEntry = (
  dictionaryList: IDictionaryData[],
  typeOfButton: string,
  wordData: IDeleteOrAddToDictionaryEntryProps
) => IDictionaryData[]

interface IDeleteOrAddToDictionaryEntryProps
  extends Omit<IDictionaryData, 'id' | 'wordLearningProgress'> {}
