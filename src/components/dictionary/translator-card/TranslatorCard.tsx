import { FC } from 'react'
import styles from './TranslatorCard.module.scss'
import { ITranslatorCardProps } from './translator-card.interface'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Progress,
  Box
} from '@chakra-ui/react'
import { useGetAudioQuery } from 'features/dictionary/wordAudioApi'
import { validateAudio } from 'utils/functions/validate-audio/validateAudio'
import { AUDIO_NOT_FOUND } from 'utils/constants'
import WordCard from 'components/ui/word-card/WordCard'
import { validateTranscription } from 'utils/functions/validate-transcription/validateTranscription'

const TranslatorCard: FC<ITranslatorCardProps> = ({
  isFetchingWord,
  validateResult
}) => {
  const { originalWord, translatedWord } = validateResult.data

  const {
    data = [
      {
        phonetic: '',
        phonetics: [
          {
            audio: AUDIO_NOT_FOUND
          }
        ]
      }
    ],
    isSuccess
  } = useGetAudioQuery(originalWord)

  const transcriptionResult = isSuccess
    ? validateTranscription(data[0].phonetic)
    : '/_ /'

  const validateAudioResult = isSuccess
    ? validateAudio(data[0].phonetics)
    : AUDIO_NOT_FOUND

  // isFetchingWord = true

  return (
    <div className={styles.card}>
      {isFetchingWord && (
        <Box className={styles.fetch}>
          <Progress size='sm' colorScheme='twitter' isIndeterminate />
        </Box>
      )}

      {validateResult.type === 'Success' && !isFetchingWord && (
        <WordCard
          typeOfButton='add'
          wordData={{
            originalWord,
            translatedWord,
            audioUrl: validateAudioResult,
            transcription: transcriptionResult
          }}
        />
      )}

      {!isFetchingWord && validateResult.type === 'Info' && (
        <Box className={styles.alert}>
          <Alert
            status='info'
            variant='solid'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
            colorScheme='messenger'
          >
            <AlertIcon />
            <AlertTitle>
              {validateResult.message}
              <span className={styles.smile}>&#129488;</span>
            </AlertTitle>
          </Alert>
        </Box>
      )}

      {!isFetchingWord && validateResult.type === 'Error' && (
        <Box className={styles.alert}>
          <Alert
            status='error'
            variant='solid'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
          >
            <AlertIcon />
            <AlertTitle>Помилка:</AlertTitle>
            <AlertDescription>
              {validateResult.message}
              <span className={styles.smile}>&#129397;</span>
            </AlertDescription>
          </Alert>
        </Box>
      )}
    </div>
  )
}

export default TranslatorCard
