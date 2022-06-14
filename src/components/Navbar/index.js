import React, { useState } from 'react'

import styles from './Navbar.module.scss';

// Material Icons
import { 
  Search
} from '@mui/icons-material';

import UserMenu from '../UserMenu';
import NotificationsMenu from '../Buttons/NotificationMenu';

export default function Navbar() {

  const [navbar, setNavbar] = useState(false);

  const scrollNavbar = () => {
    if(window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', scrollNavbar);

  return (
      <nav className={navbar ? styles['navbar__active'] : styles.navbar}>
        <div className={styles['navbar__navbar-left']}>
          <a className={styles['navbar__logo']} href="/" alt="Logo"><span className={styles['navbar__logo__first-letter']}>W</span>olden</a>
        </div>
        <div className={styles['navbar__navbar-center']}>
          <form action="#">
            <div className={styles['navbar__searchbar']}>
              <Search className={styles['navbar__searchbar-icon']}/>
              <input type="text" className={styles['navbar__searchbar-input']} placeholder="Search in Wolden..." />
            </div>
          </form>
        </div>
        <div className={styles['navbar__navbar-right']}>
          <div className={styles['navbar__container-icons']}>
            <NotificationsMenu/>
            <UserMenu/>
          </div>
        </div>
      </nav>
  )
}
