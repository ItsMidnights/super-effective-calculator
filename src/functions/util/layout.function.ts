import { 
  WEB, 
  WEB_MIN_WIDTH, 
  MOBILE, 
  TABLET, 
  TABLET_MIN_WIDTH,
  MOBILE_MAX_WIDTH,
  TABLET_MAX_WIDTH, 
} from "../../constants/layout.constants"

export const determineLayout = (width: number): string => {
  if (width > MOBILE_MAX_WIDTH && width <= TABLET_MAX_WIDTH) {
    return TABLET;
  } else if (width > WEB_MIN_WIDTH) {
    return WEB;
  } 
  return MOBILE;
}