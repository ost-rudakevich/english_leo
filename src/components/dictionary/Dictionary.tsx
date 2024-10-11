import { FC, useState } from 'react'
import styles from './Dictionary.module.scss'
import { useGetTranslationQuery } from 'features/dictionary/globalDictionaryApi'
import { BiSearchAlt } from 'react-icons/bi'
import { validateTranslation } from 'utils/functions/validate-translation/validateTranslation'
import TranslatorCard from './translator-card/TranslatorCard'
import DictionaryList from './dictionary-list/DictionaryList'
import { Spinner } from '@chakra-ui/react'
import Error from 'components/error/Error'

const Dictionary: FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [originalWord, setOriginalWord] = useState<string>('')

  const {
    data = {
      responseData: { translatedText: '' }
    },
    error,
    isLoading,
    isFetching
  } = useGetTranslationQuery(originalWord, {
    refetchOnReconnect: true
  })

  if (error) {
    return <Error />
  }

  if (isLoading) {
    return (
      <div className={styles['dictionary-wrapper']}>
        <div className={styles.spinner}>
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
        </div>
      </div>
    )
  }

  const validateTranslationResult = validateTranslation(
    originalWord,
    data.responseData.translatedText
  )

  return (
    <div className={styles['dictionary-wrapper']}>
      <div className={styles.field}>
        <input
          type='text'
          placeholder='Найти слово'
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              setOriginalWord(inputValue)
            }
          }}
        />
        <button
          className={styles.search}
          onClick={() => setOriginalWord(inputValue)}
        >
          <BiSearchAlt />
        </button>
      </div>

      <TranslatorCard
        isFetchingWord={isFetching}
        validateResult={validateTranslationResult}
      />

      <DictionaryList />
    </div>
  )
}

export default Dictionary
