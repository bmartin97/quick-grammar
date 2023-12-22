import { Typography } from '@mui/material';
import styles from './styles/Header.module.scss';
import { NavLink } from 'react-router-dom';

function Header() {
  const navItemClasses = ({ isActive }) =>
    [styles.navItem, isActive ? styles.active : ''].join(' ');

  return (
    <header className={styles.header}>
      <div className={styles.logo}>QuickGrammar</div>
      <nav className={styles.navigation}>
        <NavLink className={navItemClasses} to='/'>
          <Typography className={styles.mainMenuItem}>dev</Typography>
        </NavLink>
        <div className={styles.navItem}>
          <Typography className={styles.mainMenuItem}>Tenses</Typography>
          <ul className={styles.subMenuContainer}>
            <li className={styles.subMenuItem}>
              <NavLink className={navItemClasses} to='/tenses/present-simple'>
                <Typography>Present Simple</Typography>
              </NavLink>
            </li>
            <li className={styles.subMenuItem}>
              <NavLink
                className={navItemClasses}
                to='/tenses/present-continuous'>
                <Typography>Present Continuous</Typography>
              </NavLink>
            </li>
            <li className={styles.subMenuItem}>
              <NavLink
                className={navItemClasses}
                to='/tenses/present-perfect-simple'>
                <Typography>Present Perfect Simple</Typography>
              </NavLink>
            </li>
            <li className={styles.subMenuItem}>
              <NavLink
                className={navItemClasses}
                to='/tenses/present-perfect-Continuous'>
                <Typography>Present Perfect Continuous</Typography>
              </NavLink>
            </li>
            <li className={styles.subMenuItem}>
              <NavLink className={navItemClasses} to='/tenses/past-simple'>
                <Typography>Past Simple</Typography>
              </NavLink>
            </li>
            <li className={styles.subMenuItem}>
              <NavLink className={navItemClasses} to='/tenses/past-continuous'>
                <Typography>Past Continuous</Typography>
              </NavLink>
            </li>
            <li className={styles.subMenuItem}>
              <NavLink
                className={navItemClasses}
                to='/tenses/past-perfect-simple'>
                <Typography>Past Perfect Simple</Typography>
              </NavLink>
            </li>
            <li className={styles.subMenuItem}>
              <NavLink
                className={navItemClasses}
                to='/tenses/past-perfect-Continuous'>
                <Typography>Past Perfect Continuous</Typography>
              </NavLink>
            </li>
          </ul>
        </div>

        <NavLink className={navItemClasses} to='/tests'>
          <Typography className={styles.mainMenuItem}>Tests</Typography>
        </NavLink>
        <NavLink className={navItemClasses} to='/about'>
          <Typography className={styles.mainMenuItem}>About</Typography>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
