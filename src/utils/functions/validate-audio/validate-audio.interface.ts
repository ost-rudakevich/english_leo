export type TValidateAudio = (phonetics: IPhonetics[]) => string

interface IPhonetics {
  audio: string
  text?: string
}
