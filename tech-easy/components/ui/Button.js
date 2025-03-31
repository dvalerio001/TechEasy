import React from "react";

// Import CSS Module for styling
import styles from "../../styles/Button.module.css";

/**
 * Button Component Function
 *
 * @param {Object} props - Component properties
 * @param {string} props.variant - Button style variant ('primary', 'secondary', or 'outline')
 * @param {string} props.size - Button size ('small', 'medium', or 'large')
 * @param {boolean} props.fullWidth - Whether the button should take up the full width of its container
 * @param {Function} props.onClick - Function to call when the button is clicked
 * @param {string} props.type - Button type attribute (e.g., 'button', 'submit', 'reset')
 * @param {React.ReactNode} props.children - Content to display inside the button
 * @param {string} props.className - Additional CSS classes to add to the button
 * @returns {JSX.Element} The button JSX
 */
function Button({
  variant = "primary",
  size = "medium",
  fullWidth = false,
  onClick,
  type = "button",
  children,
  className = "",
  ...props // Rest parameter - captures any other props passed to the component
}) {
  // Combine all the class names based on props
  const buttonClasses = [
    styles.button,
    styles[`button--${variant}`], // Access variant-specific class
    styles[`button--${size}`], // Access size-specific class
    fullWidth ? styles["button--fullWidth"] : "", // Apply full width class if needed
    className, // Additional custom classes
  ]
    .filter(Boolean)
    .join(" "); // Filter out any empty strings and join with spaces

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      type={type}
      {...props} // Spread the rest of the props onto the button element
    >
      {children}
    </button>
  );
}

// Export the component so it can be imported in other files
export default Button;
