import { FC } from 'react'
import styles from './Navigation.module.scss'
import { NavLink } from 'react-router-dom'
import { NAVIGATION_DATA } from 'data/navigation-data'
import { getIcon } from 'utils/functions/get-icon/getIcon'

const Navigation: FC = () => {
  return (
    <div className={styles.nav}>
      {NAVIGATION_DATA.map(item => {
        return (
          <div className={styles.link} key={item.to}>
            <NavLink to={item.to}>
              {getIcon(item.icon)}
              <span>{item.text}</span>
            </NavLink>
          </div>
        )
      })}
    </div>
  )
}

export default Navigation
