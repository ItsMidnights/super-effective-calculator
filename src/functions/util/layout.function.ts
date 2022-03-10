import {
  WEB,
  WEB_MIN_WIDTH,
  MOBILE,
  TABLET,
  TABLET_MIN_WIDTH,
  MOBILE_MAX_WIDTH,
  TABLET_MAX_WIDTH,
} from "../../constants/layout.constants";
import { LayoutType } from "../../types";

export const determineLayout = (width: number): LayoutType => {
  if (width > MOBILE_MAX_WIDTH && width <= TABLET_MAX_WIDTH) {
    return TABLET;
  } else if (width > WEB_MIN_WIDTH) {
    return WEB;
  }
  return MOBILE;
};

// export const layoutSpecific = <T>(
//   specifics: ({
//     [layout in LayoutType]?: T
//   })
// ) => {
//   // switch (specifics) {
//   //   case ("mobile" in specifics): {
//   //     return specifics.mobile
//   //   }
//   //   case ("tablet" in specifics): {
//   //     return specifics.tablet
//   //   }
//   //   case ("web" in specifics): {
//   //     return specifics.web
//   //   }
//   // }
//   return specifics;
// }
