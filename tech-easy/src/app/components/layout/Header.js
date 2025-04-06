"use client";

import React, { useState } from "react";

// Import Next.js components
import Link from "next/link";
import Image from "next/image";

// Import CSS Module for styling
import styles from "../../styles/Header.module.css";

/**
 * Header Component Function
 *
 * A functional component that renders the site navigation header.
 * It includes responsive design with a mobile menu toggle.
 *
 * @returns {JSX.Element} The header JSX
 */
function Header() {
  // State for mobile menu toggle
  // useState is a React Hook that lets you add state to functional components
  // This state tracks whether the mobile menu is open (true) or closed (false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Function to toggle the mobile menu open/closed
   * This function is called when the menu button is clicked
   */
  const toggleMenu = () => {
    // setIsMenuOpen is the state updater function
    // We pass it the opposite of the current state to toggle between true/false
    setIsMenuOpen(!isMenuOpen);
  };

  // Return JSX (React's syntax extension for JavaScript)
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__content}>
          {/* Logo and site name */}
          <div className={styles.header__logo}>
            {/* 
              Link component from Next.js
              Works like an <a> tag but provides client-side navigation without full page refreshes
            */}
            <Link href="/">
              <span className={styles.header__siteName}>Tech-Easy</span>
            </Link>
          </div>

          {/* 
            Mobile menu button
            Only shown on small screens thanks to our CSS media queries
            onClick calls the toggleMenu function when clicked
          */}
          <button
            className={`${styles.header__menuButton} ${
              isMenuOpen ? styles["header__menuButton--active"] : ""
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={styles.header__menuIcon}></span>
          </button>

          {/* 
            Navigation links
            On mobile, this is hidden until the menu button is clicked
            The isMenuOpen state controls whether to show or hide this on mobile
          */}
          <nav
            className={`${styles.header__nav} ${
              isMenuOpen ? styles["header__nav--open"] : ""
            }`}
          >
            <ul className={styles.header__navList}>
              <li className={styles.header__navItem}>
                <Link href="/" className={styles.header__navLink}>
                  Home
                </Link>
              </li>
              <li className={styles.header__navItem}>
                <Link href="/guides" className={styles.header__navLink}>
                  Guides
                </Link>
              </li>
              <li className={styles.header__navItem}>
                <Link href="/profile" className={styles.header__navLink}>
                  Profile
                </Link>
              </li>
              <li className={styles.header__navItem}>
                <Link href="/about" className={styles.header__navLink}>
                  About
                </Link>
              </li>
            </ul>
          </nav>

          {/* User action buttons */}
          <div className={styles.header__actions}>
            <Link href="/signin" className={styles.header__signIn}>
              Sign In
            </Link>
            <Link href="/signup" className={styles.header__signUp}>
              Sign Up
            </Link>

            {/* Chat button */}
            <button
              className={styles.header__chatButton}
              aria-label="Open chat"
            >
              Chat
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

// Export the component so it can be imported in other files
export default Header;
