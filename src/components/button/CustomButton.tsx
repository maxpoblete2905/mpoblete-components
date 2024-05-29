import React from 'react';
interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  disabled = false,
}) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className="custom-button">
      {label}
    </button>
  );
};

export default CustomButton;
