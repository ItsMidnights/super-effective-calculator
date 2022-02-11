import { StyleProp, ViewStyle } from "react-native";
import { MOBILE, TABLET, WEB } from "../../../constants";

interface getStyleByLayoutArgs {
  obj: Object;
  layout: "mobile" | "tablet" | "web";
};

export const getStyleByLayout = ({
  obj,
  layout
}: getStyleByLayoutArgs): StyleProp<ViewStyle> => {
  switch (layout) {
    case MOBILE:
      return obj[MOBILE];
    case TABLET:
      return obj[TABLET];
    case WEB:
      return obj[WEB];
  }
}
