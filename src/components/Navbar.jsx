import { NavLink, Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <Link to='/'>GenoHoireDev</Link>

      <ul>
        <li><NavLink to='/home'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar