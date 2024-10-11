interface INavigationData {
  to: string
  text: string
  icon: string
}

export const NAVIGATION_DATA: INavigationData[] = [
  {
    to: '/',
    text: 'Головна',
    icon: 'FaHome'
  },
  {
    to: '/dictionary',
    text: 'Мій словник',
    icon: 'GiWhiteBook'
  }
]
