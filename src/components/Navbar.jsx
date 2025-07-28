import { NavLink, Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { useEffect, useRef, useState } from "react";
import { CloseIcon, MenuIcon } from "../assets";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const linkWrapperRef = useRef(null); // ref sidebar so we can toggle its inert attribute.

  // Toggle inert and aria-hidden for desktop and mobile sidebar
  useEffect(() => {
    const linkWrapper = linkWrapperRef.current; // grab the sidebar element.
    if (!linkWrapper) return;

    const media = window.matchMedia("(max-width: 770px)"); // setup media query.

    function updateInert() {
      if (media.matches && !isOpen) {
        linkWrapper.setAttribute("inert", ""); // make sidebar non-interactive.
      } else {
        linkWrapper.removeAttribute("inert"); // restore normal behavior
      }
    }

    updateInert(); // run it on mount and whenever isOpen changes.

    media.addEventListener("change", updateInert);

    return () => media.removeEventListener("change", updateInert); // clean up
  }, [isOpen]);

  function toggleSidebar() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.brandName}>
          GenoHoireDev
        </Link>

        <button
          className={styles.openSidebarBtn}
          onClick={toggleSidebar}
          aria-label="open sidebar"
        >
          <MenuIcon width="32px" height="32px" />
        </button>

        <ul
          className={`${styles.linkWrapper} ${isOpen ? styles.open : ""}`}
          ref={linkWrapperRef}
        >
          <li>
            <button
              className={styles.closeSidebarBtn}
              onClick={toggleSidebar}
              aria-label="close sidebar"
            >
              <CloseIcon width="32px" height="32px" />
            </button>
          </li>
          <li>
            <NavLink to="/home" onClick={toggleSidebar}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={toggleSidebar}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" onClick={toggleSidebar}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={toggleSidebar}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={isOpen ? styles.overlay : ""} onClick={toggleSidebar} />
    </>
  );
}

export default Navbar;
