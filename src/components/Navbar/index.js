import React from 'react'

import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
      <nav className={styles.navbar}>
        <div className={styles['navbar__navbar-left']}>
          <a className={styles['navbar__logo']} href="/" alt="Logo"><span className={styles['navbar__logo__first-letter']}>W</span>olden</a>
        </div>
        <div className={styles['navbar__navbar-center']}>
          <div className={styles['searchbar']}>
            <input type="text" className={styles['navbar__searchbar-input']} placeholder="Search in Wolden" />
          </div>
        </div>
        <div className={styles['navbar__navbar-right']}>
        <i class="search icon"></i>
        {/* <NotificationIcon fill="currentColor" filled /> */}
        </div>
      </nav>
  )
}
