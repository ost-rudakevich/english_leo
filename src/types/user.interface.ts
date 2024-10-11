export interface IUserData {
  username: string
  email: string
  password: string
  id: number
}

export interface IUserLoginData extends Omit<IUserData, 'username'> {}

export interface IResponseUserData {
  accessToken: string
  user: IUserData
}
