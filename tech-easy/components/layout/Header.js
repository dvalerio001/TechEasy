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
 * A functional component that returns JSX to render the header.
 *
 * @returns {JSX.Element} The header JSX
 */
function Header() {
  // State for mobile menu toggle
  // useState is a React Hook that lets you add state to functional components
  // It returns an array with two items: the current state value and a function to update it
  // The argument to useState is the initial state value
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
      <div className={styles.container}>
        <div className={styles.headerContent}>
          {/* Logo and site name */}
          <div className={styles.logo}>
            {/* 
              Link component from Next.js
              Works like an <a> tag but provides client-side navigation without full page refreshes
            */}
            <Link href="/">
              {/* 
                For now, we'll just use text instead of an image
                We'll add a proper logo image later
              */}
              <span className={styles.siteName}>Tech-Easy</span>
            </Link>
          </div>

          {/* 
            Mobile menu button
            Only shown on small screens
            onClick calls the toggleMenu function when clicked
          */}
          <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {/* Simple menu icon */}
            <span className={styles.menuIcon}></span>
          </button>

          {/* 
            Navigation links
            On mobile, this is hidden until the menu button is clicked
            The isMenuOpen state controls whether to show or hide this on mobile
          */}
          <nav className={`${styles.nav} ${isMenuOpen ? styles.showMenu : ""}`}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link href="/" className={styles.navLink}>
                  Home
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/guides" className={styles.navLink}>
                  Guides
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/profile" className={styles.navLink}>
                  Profile
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/about" className={styles.navLink}>
                  About
                </Link>
              </li>
            </ul>
          </nav>

          {/* User action buttons */}
          <div className={styles.actions}>
            <Link href="/signin" className={styles.signIn}>
              Sign In
            </Link>
            <Link href="/signup" className={`${styles.signUp} btn btn-primary`}>
              Sign Up
            </Link>

            {/* Chat button */}
            <button className={styles.chatButton} aria-label="Open chat">
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
