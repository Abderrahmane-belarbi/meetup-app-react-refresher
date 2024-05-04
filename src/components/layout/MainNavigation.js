import { Link } from "react-router-dom"

export default function MainNavigation() {
  return <header>
    <div>Meet<span>Ups</span></div>
    <nav>
      <ul>
        <li>
          <Link to='/'>All Meets</Link>
        </li>
        <li>
          <Link to='/new'>Add Meet</Link>
        </li>
        <li>
          <Link to='/favorites'>Favorites</Link>
        </li>
      </ul>
    </nav>
  </header>
}
