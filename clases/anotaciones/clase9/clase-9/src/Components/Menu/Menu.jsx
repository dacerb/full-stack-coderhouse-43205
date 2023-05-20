import { Link, NavLink  } from "react-router-dom"
const Menu = () => {
  return (
    <header>
      <Link to={"/"}> <h1>CellShop</h1> </Link>
      <nav>
        <ul>
        <li>
            <NavLink to={"/Silla"}> Silla </NavLink>
          </li>
          <li>
            <NavLink to={"/Computadoras"}> Computadoras </NavLink>
          </li>
          <li>
            <NavLink to={"/Celulares"}> Celulares </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Menu