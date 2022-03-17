import React from "react";
import { atom, useRecoilState } from "recoil";
import { useColorScheme } from "react-native";

export const theme = atom({
  key: "theme",
  default: "light",
});

export const useDeviceTheme = () => {
  const deviceTheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useRecoilState(theme);

  const matchTheme = React.useCallback(() => {
    if (!deviceTheme) {
      return;
    } else {
      setCurrentTheme(deviceTheme);
    }
  }, [currentTheme, deviceTheme]);

  return React.useEffect(() => {
    matchTheme();
    console.log("Device theme: " + deviceTheme);
  }, [currentTheme]);
};
