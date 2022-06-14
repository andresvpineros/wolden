import React from 'react'

import styles from './NotificationMenu.module.scss';

// Icons
import { Notifications } from '@mui/icons-material';

export default function NotificationMenu() {
  return (
    <div className={styles.notifications}>
        <button className={styles['notifications__notification-button']}>
            <div className={styles['notifications__notification-button__number-cont']}>
                <span className={styles['notifications__notification-button__number-cont__number']}>9+</span>
            </div>
            <Notifications className={styles['notifications__notification-button__notification-icon']}/>
        </button>
    </div>
  )
}
