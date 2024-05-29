export interface CustomButtonProps {
  label: string;
  type?: ButtonType;
  disabled?: boolean;
  size?: ButtonSize;
  color?: ButtonColor;
  icon?: IconLibrary;
  onClick?: () => void;
}

export type ButtonColor = 'default' | 'primary' | 'secondary' | 'danger' | 'custom-primary' | 'custom-secondary' | 'custom-danger' | 'green' | 'yellow';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonType = 'button' | 'submit' | 'reset';

export type IconLibrary = 'trash' | 'plus' | 'edit' | 'checkboxEmpty' | 'checkboxFilled' | 'save' | 'close' | 'home' | 'user' | 'search' | 'cog' | 'heart' | 'bell' | 'envelope' | 'star' | 'thumbsUp' | 'thumbsDown' | 'comment' | 'bars' | 'times' | 'chevronLeft' | 'chevronRight' | 'chevronUp' | 'chevronDown' | 'arrowLeft' | 'arrowRight' | 'arrowUp' | 'arrowDown' | 'check' | 'timesCircle' | 'exclamationTriangle' | 'infoCircle' | 'questionCircle' | 'laugh' | 'frown' | 'meh' | 'grin' | 'grinStars' | 'grinTears' | 'sadTear' | 'sadCry' | 'tired' | 'dizzy' | 'flushed' | 'angry' | 'mehBlank' | 'smileBeam' | 'grinBeam' | 'kissWinkHeart' | 'laughWink' | 'smileWink' | 'surprise' | 'mehRollingEyes' | 'lock';

