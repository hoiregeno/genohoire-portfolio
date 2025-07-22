import { NavLink, Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <Link>GenoHoireDev</Link>
      
      <ul>
        <li><NavLink>Home</NavLink></li>
        <li><NavLink>About</NavLink></li>
        <li><NavLink>Portfolio</NavLink></li>
        <li><NavLink>Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar