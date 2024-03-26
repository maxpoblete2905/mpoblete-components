import { ReactNode } from 'react';
import { BsTrash, BsPlus, BsPencil } from "react-icons/bs";
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from "react-icons/ri";
import { AiOutlineSave, AiOutlineClose } from "react-icons/ai";
import { FaHome, FaUser, FaSearch, FaCog, FaHeart, FaBell, FaEnvelope, FaStar, FaThumbsUp, FaThumbsDown, FaComment, FaBars, FaTimes, FaChevronLeft, FaChevronRight, FaChevronUp, FaChevronDown, FaArrowLeft, FaArrowRight, FaArrowUp, FaArrowDown, FaCheck, FaTimesCircle, FaExclamationTriangle, FaInfoCircle, FaQuestionCircle, FaRegLaugh, FaRegFrown, FaRegMeh, FaRegGrin, FaRegGrinStars, FaRegGrinTears, FaRegSadTear, FaRegSadCry, FaRegTired, FaRegDizzy, FaRegFlushed, FaRegAngry, FaRegMehBlank, FaRegSmileBeam, FaRegGrinBeam, FaRegKissWinkHeart, FaRegLaughWink, FaRegSmileWink, FaRegSurprise, FaRegMehRollingEyes } from "react-icons/fa";

interface IconLibrary {
  [key: string]: ReactNode; 
}

const icons: IconLibrary = {
  trash: <BsTrash />,
  plus: <BsPlus />,
  edit: <BsPencil />,
  checkboxEmpty: <RiCheckboxBlankCircleLine />,
  checkboxFilled: <RiCheckboxCircleFill />,
  save: <AiOutlineSave />,
  close: <AiOutlineClose />,
  home: <FaHome />,
  user: <FaUser />,
  search: <FaSearch />,
  cog: <FaCog />,
  heart: <FaHeart />,
  bell: <FaBell />,
  envelope: <FaEnvelope />,
  star: <FaStar />,
  thumbsUp: <FaThumbsUp />,
  thumbsDown: <FaThumbsDown />,
  comment: <FaComment />,
  bars: <FaBars />,
  times: <FaTimes />,
  chevronLeft: <FaChevronLeft />,
  chevronRight: <FaChevronRight />,
  chevronUp: <FaChevronUp />,
  chevronDown: <FaChevronDown />,
  arrowLeft: <FaArrowLeft />,
  arrowRight: <FaArrowRight />,
  arrowUp: <FaArrowUp />,
  arrowDown: <FaArrowDown />,
  check: <FaCheck />,
  timesCircle: <FaTimesCircle />,
  exclamationTriangle: <FaExclamationTriangle />,
  infoCircle: <FaInfoCircle />,
  questionCircle: <FaQuestionCircle />,
  laugh: <FaRegLaugh />,
  frown: <FaRegFrown />,
  meh: <FaRegMeh />,
  grin: <FaRegGrin />,
  grinStars: <FaRegGrinStars />,
  grinTears: <FaRegGrinTears />,
  sadTear: <FaRegSadTear />,
  sadCry: <FaRegSadCry />,
  tired: <FaRegTired />,
  dizzy: <FaRegDizzy />,
  flushed: <FaRegFlushed />,
  angry: <FaRegAngry />,
  mehBlank: <FaRegMehBlank />,
  smileBeam: <FaRegSmileBeam />,
  grinBeam: <FaRegGrinBeam />,
  kissWinkHeart: <FaRegKissWinkHeart />,
  laughWink: <FaRegLaughWink />,
  smileWink: <FaRegSmileWink />,
  surprise: <FaRegSurprise />,
  mehRollingEyes: <FaRegMehRollingEyes />,
};

export const getIconByName = (name: string): ReactNode | null => {
  if (icons.hasOwnProperty(name)) {
    return icons[name];
  } else {
    console.error(`Icono '${name}' no encontrado.`);
    return null;
  }
}
