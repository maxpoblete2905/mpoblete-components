import React from "react";
import classNames from "classnames";
import { InputProps } from "./InputProps"; 
import { getIconByName } from "../../icon/handlerIcon";
import '../../css/index.css'; 
import './input.css';

export const InputComponent: React.FC<InputProps> = ({
  label = "Label",
  type = "text",
  value,
  placeholder,
  color = 'black-solid',
  fontSize = '18',
  fontWeight = 'normal',
  margin = '0',
  padding = 'sm',
  borderRadius = 'md',
  boxShadow = 'none',
  backgroundColor = 'white-light',
  hoverScale = 100,
  disabled = false,
  maxLength = 200,
  labelColor = 'black-solid',
  onChange,
  hoverBackground,
  hoverColor,
  onFocus,
  onBlur,
  icon,
  min,
  max,
}) => {
  const inputClasses = classNames(
    'custom-input',
    `color-${color}`,
    `background-${backgroundColor}`,
    `font-size-${fontSize}`,
    `font-weight-${fontWeight}`,
    `margin-${margin}`,
    `padding-${padding}`,
    `border-radius-${borderRadius}`,
    `box-shadow-${boxShadow}`,
    {
      [`hover-background-color-${hoverBackground || backgroundColor}`]: !disabled,
      [`hover-color-${hoverColor || color}`]: !disabled,
      [`hover-scale-${hoverScale}`]: !disabled
    }
  );

  const labelClasses = classNames(
    'input-label',
    `color-${labelColor}`,
    `font-size-${fontSize}`,
    `font-weight-${fontWeight}`,
    `margin-${margin}`,
    `padding-${padding}`,
    `box-shadow-${boxShadow}`,
    {
      [`hover-color-${hoverColor || color}`]: !disabled
    }
  );

  const iconData = icon ? getIconByName(icon) : null;

  return (
    <div className="input-container">
      <label className={labelClasses}>{label}</label>
      <div className="input-wrapper">
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          className={inputClasses}
          disabled={disabled}
          onChange={(e) => onChange && onChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          min={min}
          max={max}
          maxLength={maxLength}
        />
        {iconData && 
          <span 
            className={`input-icon font-size-${fontSize} color-${color}`} 
          >
            {iconData}
          </span>
        }
      </div>
    </div>
  );
};
