import { StatusBar } from "react-native";
import { useRecoilValue } from "recoil";
import { theme } from "../../data/store";

export const AwareStatusBar = () => {
  const currentTheme = useRecoilValue(theme);

  return (
    <StatusBar
      translucent={true}
      backgroundColor={currentTheme === "dark" ? "#000" : "#fff"}
      barStyle={currentTheme === "dark" ? "light-content" : "dark-content"}
    />
  );
};
