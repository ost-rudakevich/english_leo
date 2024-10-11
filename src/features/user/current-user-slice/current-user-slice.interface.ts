import { IUserData } from 'types/user.interface'

export interface ICurrentUser {
  user: IPublicUserData | null
}

interface IPublicUserData extends Omit<IUserData, 'password'> {}
