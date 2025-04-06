import React from "react";

// Import CSS Module for styling
import styles from "../../styles/Button.module.css";

/**
 * Button Component Function
 *
 * A reusable button component with various styling options.
 * This follows BEM (Block Element Modifier) naming convention in its CSS.
 *
 * @param {Object} props - Component properties
 * @param {string} props.variant - Button style variant ('primary', 'secondary', or 'outline')
 * @param {string} props.size - Button size ('small', 'medium', or 'large')
 * @param {boolean} props.fullWidth - Whether the button should take up the full width of its container
 * @param {boolean} props.disabled - Whether the button is disabled
 * @param {Function} props.onClick - Function to call when the button is clicked
 * @param {string} props.type - Button type attribute (e.g., 'button', 'submit', 'reset')
 * @param {React.ReactNode} props.children - Content to display inside the button
 * @param {React.ReactNode} props.icon - Icon to display inside the button
 * @param {boolean} props.iconRight - Whether to display the icon on the right side
 * @param {string} props.className - Additional CSS classes to add to the button
 * @returns {JSX.Element} The button JSX
 */
function Button({
  variant = "primary",
  size = "medium",
  fullWidth = false,
  disabled = false,
  onClick,
  type = "button",
  children,
  icon,
  iconRight = false,
  className = "",
  ...props // Rest parameter - captures any other props passed to the component
}) {
  // Create class names based on props
  const buttonClasses = [
    styles.button,
    // Add variant class (e.g., styles['button--primary'])
    styles[`button--${variant}`],
    // Add size class (e.g., styles['button--medium'])
    styles[`button--${size}`],
    // Add full width class if needed
    fullWidth ? styles["button--fullWidth"] : "",
    // Add disabled class if needed
    disabled ? styles["button--disabled"] : "",
    // Add icon class if an icon is provided
    icon ? styles["button--withIcon"] : "",
    // Add any additional custom classes
    className,
  ]
    .filter(Boolean) // Remove any falsy values (empty strings)
    .join(" "); // Join all class names with spaces

  // Icon element with proper positioning class
  const iconElement = icon && (
    <span
      className={
        iconRight ? styles["button__icon--right"] : styles.button__icon
      }
    >
      {icon}
    </span>
  );

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...props} // Spread the rest of the props onto the button element
    >
      {/* If icon is on the left, render it first */}
      {icon && !iconRight && iconElement}

      {/* Button text/content */}
      {children}

      {/* If icon is on the right, render it last */}
      {icon && iconRight && iconElement}
    </button>
  );
}

// Export the component so it can be imported in other files
export default Button;
