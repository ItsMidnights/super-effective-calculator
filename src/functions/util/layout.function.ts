import { DESKTOP, DESKTOP_MIN_WIDTH, MOBILE, TABLET, TABLET_MIN_WIDTH } from "../../constants/layout.constants"

export const determineLayout = (width: number): string => {

  if (width >= DESKTOP_MIN_WIDTH) {
    return DESKTOP;
  } else if (width >= TABLET_MIN_WIDTH) {
    return TABLET;
  } 

  return MOBILE;
}