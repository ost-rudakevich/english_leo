import { AUDIO_NOT_FOUND } from 'utils/constants'
import { TValidateAudio } from './validate-audio.interface'

export const validateAudio: TValidateAudio = phonetics => {
  const validAudio = phonetics.find(({ audio }) => audio.endsWith('.mp3'))

  return validAudio ? validAudio.audio : AUDIO_NOT_FOUND
}
