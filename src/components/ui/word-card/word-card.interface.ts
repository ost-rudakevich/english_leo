import { IDictionaryData } from 'types/dictionary.interface'

export interface IWordCardProps {
  typeOfButton: 'add' | 'delete'
  wordData: IWordData
}

interface IWordData
  extends Omit<IDictionaryData, 'id' | 'wordLearningProgress'> {
  id?: string
  wordLearningProgress?: number
}
