import { FC } from 'react'
import styles from './DictionaryList.module.scss'
import { useAppSelector } from 'hooks/redux-hooks'
import { useGetUserDictionaryQuery } from 'features/dictionary/userDictionaryApi'
import { GiNotebook } from 'react-icons/gi'
import WordCard from 'components/ui/word-card/WordCard'
import Error from 'components/error/Error'

const DictionaryList: FC = () => {
  const userId = useAppSelector(store => store.currentUser.user.id)
  const { data, error } = useGetUserDictionaryQuery(userId)

  if (error) {
    return <Error />
  }

  if (data === undefined) {
    return <Error />
  }

  if (data.dictionary.length === 0) {
    return (
      <div className={styles['dictionary-list']}>
        <div className={styles.empty}>
          <GiNotebook />
          <div className={styles.card}>Ваш словничок поки пустий</div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles['dictionary-list']}>
      {data.dictionary.map(item => {
        return (
          <WordCard
            key={item.id}
            typeOfButton='delete'
            wordData={{
              ...item
            }}
          />
        )
      })}
    </div>
  )
}

export default DictionaryList

// id: item.id,
//               originalWord: item.originalWord,
//               translatedWord: item.translatedWord,
//               audioUrl: item.audioUrl,
//               transcription: item.transcription
