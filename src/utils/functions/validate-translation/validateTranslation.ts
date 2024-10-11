import { capitalizeFirstLetter } from '../capitalize-first-letter/capitalizeFirstLetter'
import { TValidateTranslation } from './validate-translation.interface'

export const validateTranslation: TValidateTranslation = (
  originalWord,
  translatedWord
) => {
  if (
    originalWord.toLocaleLowerCase() === translatedWord.toLocaleLowerCase() ||
    translatedWord.length === 1
    // bright помилка
  ) {
    return {
      isValid: false,
      type: 'Error',
      message: 'Ймовірно, ви ввели неіснуюче слово',
      data: {
        originalWord,
        translatedWord: 'Не знайдено'
      }
    }
  } else if (
    translatedWord.includes('NO QUERY SPECIFIED.') ||
    translatedWord === ''
  ) {
    return {
      isValid: false,
      type: 'Info',
      message: 'Введіть слово, щоб дізнатись його переклад',
      data: {
        originalWord,
        translatedWord: 'Не знайдено'
      }
    }
  }
  return {
    isValid: true,
    type: 'Success',
    message: 'Переклад слова пройшов успішно!',
    data: {
      originalWord: capitalizeFirstLetter(originalWord),
      translatedWord: capitalizeFirstLetter(translatedWord)
    }
  }
}

// } else if (translatedWord === '') {
//   return {
//     message: 'Введіть слово, щоб дізнатись його переклад',
//     isValid: false,
//     data: {
//       originalWord,
//       translatedWord: 'Не знайдено'
//     }
//   }
