import { Link } from "react-router-dom"
import classes from './MainNavigation.module.css'
import { useLocation } from "react-router-dom"

export default function MainNavigation() {
  const currentPathName = useLocation().pathname;
  const pathname = currentPathName.toString()
  console.log( pathname)
  return <header className={classes.navigationHeader}>
    <div className={classes.logo}>Meet<span className={classes.logospan}>Ups</span></div>
    <nav className={classes.navigationNav}>
      <ul className={classes.navigationUl}>
        <li className={classes.navigationLi}>
          <Link className={ pathname === '/' ? classes.active : classes.navigationA } to='/'>All Meets</Link>
        </li>
        <li className={classes.navigationLi}>
          <Link className={ pathname === '/new' ? classes.active : classes.navigationA } to='/new'>Add Meet</Link>
        </li>
        <li className={classes.navigationLi}>
          <Link className={ pathname === '/favorites' ? classes.active : classes.navigationA } to='/favorites'>Favorites</Link>
        </li>
      </ul>
      {/* <input type="color" /> */}
    </nav>
  </header>
}
