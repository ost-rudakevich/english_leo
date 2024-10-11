import { FC, useMemo } from 'react'
import styles from './WordCard.module.scss'
import { HiPlus, HiSpeakerWave } from 'react-icons/hi2'
import { FaVolumeXmark, FaTrashCan } from 'react-icons/fa6'
import { IWordCardProps } from './word-card.interface'
import { AUDIO_NOT_FOUND, BASE_URL } from 'utils/constants'
import { useAppSelector } from 'hooks/redux-hooks'
import { useEditDictionaryMutation } from 'features/dictionary/userDictionaryApi'
import { updateDictionary } from 'utils/functions/update-dictionary/updateDictionary'
import axios from 'axios'

const WordCard: FC<IWordCardProps> = ({ typeOfButton, wordData }) => {
  const userId = useAppSelector(store => store.currentUser.user.id)

  const [editDictionary] = useEditDictionaryMutation()

  const handleUpdateDictionary = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/dictionary/${userId}`)

      const originalObject = response.data

      const newDictionaryList = updateDictionary(
        originalObject,
        wordData,
        typeOfButton
      )

      editDictionary(newDictionaryList)
    } catch (e) {
      console.log(e)
    }
  }

  const audio = useMemo(() => {
    return new Audio(wordData.audioUrl)
  }, [wordData.audioUrl])

  return (
    <div className={styles['word-card']}>
      <div className={styles.actions}>
        <button onClick={() => audio.play()} className={styles.audio}>
          {wordData.audioUrl !== AUDIO_NOT_FOUND ? (
            <HiSpeakerWave />
          ) : (
            <FaVolumeXmark />
          )}
        </button>

        {typeOfButton === 'add' ? (
          <button
            className={styles['btn-add']}
            onClick={handleUpdateDictionary}
          >
            <HiPlus />
          </button>
        ) : (
          <button
            className={styles['btn-delete']}
            onClick={handleUpdateDictionary}
          >
            <FaTrashCan />
          </button>
        )}
      </div>

      <div className={styles['word-container']}>
        <span className={styles.transcription}>{wordData.transcription}</span>
        <span className={styles['original-word']}>{wordData.originalWord}</span>
        <span className={styles.translated}>{wordData.translatedWord}</span>
      </div>

      <div className={styles.remark}>
        <p>@english-leo</p>
      </div>
    </div>
  )
}

export default WordCard
