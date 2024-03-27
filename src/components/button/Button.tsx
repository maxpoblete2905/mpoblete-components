import React from "react";
import classNames from "classnames";
import { ButtonProps } from "./ButtonPros";
import { getIconByName } from "../../icon/handlerIcon";
import '../../css/index.css';
import './button.css';

export const ButtonTest: React.FC<ButtonProps> = ({
  color = 'white-light',
  fontSize = '18',
  fontWeight = 'normal',
  margin = '0',
  padding = 'sm',
  borderRadius = 'md',
  boxShadow = 'none',
  backgroundColor = 'blue-solid',
  label = 'Guardar registro',
  allCaps = false,
  disabled = false,
  hoverScale = 100,
  hoverBackground,
  hoverColor,
  icon,
  onClick
}) => {

  const buttonClasses = classNames(
    'custom-button',
    `color-${color}`,
    `background-${disabled ? 'gray-solid' : backgroundColor}`,
    `font-size-${fontSize}`,
    `font-weight-${fontWeight}`,
    `margin-${margin}`,
    `padding-${padding}`,
    `border-radius-${borderRadius}`,
    `box-shadow-${boxShadow}`,
    {
      [`hover-background-color-${hoverBackground ? (disabled ? 'gray-solid' : hoverBackground) : backgroundColor}`]: !disabled,
      [`hover-color-${hoverColor ? (disabled ? 'gray-medium' : hoverColor) : color}`]: !disabled,
      [`hover-scale-${hoverScale}`]: !disabled
    }
  );

  const iconData = icon ? getIconByName(icon) : null;
  const labelData = allCaps ? label.toUpperCase() : label;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {iconData && iconData}
      {label && <span className="label">{labelData}</span>}
    </button>
  );
};
