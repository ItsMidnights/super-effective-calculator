import { atom } from "recoil";
import { MOBILE } from "../../constants";
import { LayoutType } from "../../types";

export const layoutState = atom<LayoutType>({
  key: "layoutState",
  default: MOBILE,
});
