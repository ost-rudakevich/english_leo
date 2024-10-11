import { FaHome } from 'react-icons/fa'
import { IoSchool } from 'react-icons/io5'
import { GiWhiteBook } from 'react-icons/gi'

export const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaHome':
      return <FaHome />
    case 'GiWhiteBook':
      return <GiWhiteBook />
    case 'IoSchool':
      return <IoSchool />
    default:
      return <></>
  }
}
