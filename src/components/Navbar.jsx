import { NavLink, Link } from "react-router-dom"
import styles from '../styles/Navbar.module.css'
import { useEffect, useRef, useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const linkWrapperRef = useRef(null); // ref sidebar so we can toggle its inert attribute.

  useEffect(()=> {
    const linkWrapper = linkWrapperRef.current; // grab the sidebar element.
    if(!linkWrapper) return;
    
    const media = window.matchMedia("(max-width: 770px)"); // setup media query.

    function updateInert(){
      if(media.matches && !isOpen){
        linkWrapper.setAttribute("inert", ""); // make sidebar non-interactive.
        linkWrapper.setAttribute("aria-hidden", "true");
      }
      else{
        linkWrapper.removeAttribute("inert"); // restore normal behavior
        linkWrapper.removeAttribute("aria-hidden");
      }
    }

    updateInert(); // run it on mount and whenever isOpen changes.

    media.addEventListener("change", updateInert);

    return () => media.removeEventListener("change", updateInert);
  }, [isOpen]);

  function toggleSidebar(){
    setIsOpen(prev => !prev);
  }

  return (
    <>
      <nav className={styles.navbar}>
        <Link to='/' className={styles.brandName}>GenoHoireDev</Link>
        <button
          className={styles.openSidebarBtn}
          onClick={toggleSidebar}
          aria-label="open sidebar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
          </svg>
        </button>
      
        <ul
          className={`${styles.linkWrapper} ${isOpen ? styles.open : ''}`}
          ref={linkWrapperRef}
        >
          <li>
            <button
              className={styles.closeSidebarBtn}
              onClick={toggleSidebar}
              aria-label="close sidebar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
              </svg>
            </button>
          </li>
          <li>
            <NavLink to='/home' onClick={toggleSidebar}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about' onClick={toggleSidebar}>About</NavLink>
          </li>
          <li>
            <NavLink to='/portfolio' onClick={toggleSidebar}>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to='/contact' onClick={toggleSidebar}>Contact</NavLink>
          </li>
        </ul>
      </nav>

      <div 
        className={isOpen ? styles.overlay : ''}
        onClick={toggleSidebar}
      />
    </>
  )
}

export default Navbar