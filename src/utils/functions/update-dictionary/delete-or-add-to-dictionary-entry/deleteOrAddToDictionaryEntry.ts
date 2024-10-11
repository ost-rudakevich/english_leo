import { TDeleteOrAddToDictionaryEntry } from './delete-or-add-to-dictionary-entry.interface'
import { nanoid } from 'nanoid'

export const deleteOrAddToDictionaryEntry: TDeleteOrAddToDictionaryEntry = (
  dictionaryList,
  typeOfButton,
  wordData
) => {
  if (typeOfButton === 'delete') {
    const newDictionaryList = dictionaryList.filter(
      item => item.originalWord !== wordData.originalWord
    )
    return newDictionaryList
  } else if (typeOfButton === 'add') {
    const isWord = dictionaryList.some(
      item => item.originalWord === wordData.originalWord
    )

    if (isWord === false) {
      dictionaryList.unshift({
        id: nanoid(),
        ...wordData,
        wordLearningProgress: 0
      })

      return dictionaryList
    }
  }

  return dictionaryList
}
