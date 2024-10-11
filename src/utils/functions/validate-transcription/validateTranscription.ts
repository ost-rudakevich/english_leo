import { TValidateTranscription } from './validate-transcription.interface'

export const validateTranscription: TValidateTranscription = phonetic => {
  return phonetic === undefined ? '/_ /' : phonetic
}
