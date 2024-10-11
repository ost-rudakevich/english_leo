export interface IDictionary {
  userId: number
  id: number
  dictionary: IDictionaryData[]
}

export interface IDictionaryData {
  id: string
  originalWord: string
  translatedWord: string
  audioUrl: string
  transcription: string
  wordLearningProgress: number
}

export interface IWordData {
  originalWord: string
  translatedWord: string
}
