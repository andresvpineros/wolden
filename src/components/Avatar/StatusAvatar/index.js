
import React from 'react'

import styles from './StatusAvatar.module.scss';
import image from "../../../assets/img/avatar.jpg";

export default function StatusAvatar() {
  return (
    <div className={styles['status-avatar']}>
        <div className={styles['status-avatar__status']}/>
        <img className={styles['status-avatar__image']} src={image} alt="Avatar" />
    </div>
  )
}
