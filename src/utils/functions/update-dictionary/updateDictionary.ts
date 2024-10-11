import { deleteOrAddToDictionaryEntry } from './delete-or-add-to-dictionary-entry/deleteOrAddToDictionaryEntry'
import { TUpdateDictionary } from './update-dictionary.interface'

export const updateDictionary: TUpdateDictionary = (
  userDictionaryData,
  wordData,
  typeOfButton
) => {
  return {
    ...userDictionaryData,
    dictionary: deleteOrAddToDictionaryEntry(
      userDictionaryData.dictionary,
      typeOfButton,
      wordData
    )
  }
}
