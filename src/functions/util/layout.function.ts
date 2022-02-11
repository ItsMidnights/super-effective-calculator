import { WEB, WEB_MIN_WIDTH, MOBILE, TABLET, TABLET_MIN_WIDTH } from "../../constants/layout.constants"

export const determineLayout = (width: number): string => {

  if (width >= WEB_MIN_WIDTH) {
    return WEB;
  } else if (width >= TABLET_MIN_WIDTH) {
    return TABLET;
  } 

  return MOBILE;
}