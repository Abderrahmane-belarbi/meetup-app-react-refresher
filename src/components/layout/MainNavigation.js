import { Link } from "react-router-dom"
import classes from './MainNavigation.module.css'

export default function MainNavigation() {
  return <header className={classes.navigationHeader}>
    <div className={classes.logo}>Meet<span className={classes.logospan}>Ups</span></div>
    <nav className={classes.navigationNav}>
      <ul className={classes.navigationUl}>
        <li className={classes.navigationLi}>
          <Link className={classes.navigationA} to='/'>All Meets</Link>
        </li>
        <li className={classes.navigationLi}>
          <Link className={classes.navigationA} to='/new'>Add Meet</Link>
        </li>
        <li className={classes.navigationLi}>
          <Link className={classes.navigationA} to='/favorites'>Favorites</Link>
        </li>
      </ul>
      {/* <input type="color" /> */}
    </nav>
  </header>
}
