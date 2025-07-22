import { NavLink, Link } from "react-router-dom"
import styles from '../styles/Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to='/' className={styles.brandName}>GenoHoireDev</Link>

      <ul className={styles.linkWrapper}>
        <li><NavLink to='/home'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar