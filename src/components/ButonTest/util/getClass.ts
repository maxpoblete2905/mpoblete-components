import { ButtonProps } from "../ButtonPros";

export const generateButtonClasses = (props: ButtonProps): string => {
    return `
      custom-button color-${props.color}
      background-${props.backgroundColor} 
      font-size-${props.fontSize} 
      font-weight-${props.fontWeight} 
      margin-${props.margin} 
      padding-${props.padding}
      border-radius-${props.borderRadius} 
      box-shadow-${props.boxShadow} 
      hover-color-${props.hoverColor}
    `;
}
