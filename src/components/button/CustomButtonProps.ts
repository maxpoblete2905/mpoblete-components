export type ButtonColor = 'default' | 'primary' | 'secondary' | 'danger' | 'custom-primary' | 'custom-secondary' | 'custom-danger' | 'green' | 'yellow';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonType = 'button' | 'submit' | 'reset';

export interface CustomButtonProps {
  label: string;
  type?: ButtonType;
  disabled?: boolean;
  size?: ButtonSize;
  color?: ButtonColor;
  icon?: React.ReactNode;
  onClick?: () => void;
}