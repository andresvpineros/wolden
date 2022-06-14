import React from 'react'

// Styles
import styles from './UserMenu.module.scss';

import StatusAvatar from '../Avatar/StatusAvatar';

// Icons
import { KeyboardArrowDown } from '@mui/icons-material';

export default function UserMenu() {
  return (
    <div className={styles['user-menu']}>
        <button className={styles['user-menu__button']}>
            <StatusAvatar />
            <div className={styles['user-menu__button__text']}>
              <span className={styles['user-menu__button__text__user-name']}>iEk1nox</span>
              <span className={styles['user-menu__button__text__status']}>Online</span>
            </div>
            <KeyboardArrowDown className={styles['user-menu__button__arrow-icon']}/>
        </button>
    </div>
  )
}
