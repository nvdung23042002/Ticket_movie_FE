import React from 'react'
import './style.css'

const STYLES = [
  "btn--primary--solid",
  "btn--warning--solid",
  "btn--danger--solid",
  "btn--success--solid",
  "btn--primary--outline",
  "btn--warning--outline",
  "btn--danger--outline",
  "btn--success--outline"
];
const SIZES = ["btn--medium", "btn--large", "btn--small"];
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  // Fallback in case no style is stipulated
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  // Fallback in case no Size is stipulated
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};