import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

function Header() {
  const navItemClasses = ({ isActive }) =>
    [styles.navItem, isActive ? styles.active : ''].join(' ');

  return (
    <header className={styles.header}>
      <div className={styles.logo}>QuickGrammar</div>
      <nav className={styles.navigation}>
        <NavLink className={navItemClasses} to='/'>
          <span className={styles.mainMenuItem}>dev</span>
        </NavLink>
        <div className={styles.navItem}>
          <span className={styles.mainMenuItem}>Tenses</span>
          <ul className={styles.subMenuContainer}>
            <li className={styles.subMenuItem}>
              <NavLink className={navItemClasses} to='/tenses/present-simple'>
                <span>Present Simple</span>
              </NavLink>
            </li>
            <li className={styles.subMenuItem}>
              <NavLink
                className={navItemClasses}
                to='/tenses/present-continuous'>
                <span>Present Continuous</span>
              </NavLink>
            </li>
            <li className={styles.subMenuItem}>
              <NavLink
                className={navItemClasses}
                to='/tenses/present-perfect-simple'>
                <span>Present Perfect Simple</span>
              </NavLink>
            </li>
            <li className={styles.subMenuItem}>
              <NavLink
                className={navItemClasses}
                to='/tenses/present-perfect-Continuous'>
                <span>Present Perfect Continuous</span>
              </NavLink>
            </li>
            <li className={styles.subMenuItem}>
              <NavLink className={navItemClasses} to='/tenses/past-simple'>
                <span>Past Simple</span>
              </NavLink>
            </li>
            <li className={styles.subMenuItem}>
              <NavLink className={navItemClasses} to='/tenses/past-continuous'>
                <span>Past Continuous</span>
              </NavLink>
            </li>
            <li className={styles.subMenuItem}>
              <NavLink
                className={navItemClasses}
                to='/tenses/past-perfect-simple'>
                <span>Past Perfect Simple</span>
              </NavLink>
            </li>
            <li className={styles.subMenuItem}>
              <NavLink
                className={navItemClasses}
                to='/tenses/past-perfect-Continuous'>
                <span>Past Perfect Continuous</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <NavLink className={navItemClasses} to='/tests'>
          <span className={styles.mainMenuItem}>Tests</span>
        </NavLink>
        <NavLink className={navItemClasses} to='/about'>
          <span className={styles.mainMenuItem}>About</span>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
