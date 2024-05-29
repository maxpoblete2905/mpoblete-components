import React from 'react';
import './CustomButton.css';
import './CustomButtonColor.css'
import { CustomButtonProps } from './CustomButtonProps';

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  type = 'button',
  disabled = false,
  size = 'medium',
  color = 'default',
  icon,
}) => {
  const classNames = `custom-button ${size} ${color}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {label}
    </button>
  );
};

export default CustomButton;
