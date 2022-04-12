import { NavigationContainer } from "@react-navigation/native";
import { HomeNavigator, Routes } from "./src/routes";
import { Platform, SafeAreaView, StatusBar } from "react-native";
import { injectWebCss } from "./src/functions/util";
import { RecoilRoot } from "recoil";
import Main from "./src/main";

export default function App() {
  return (
    <NavigationContainer>
      <RecoilRoot>
        {/* <Main /> */}
        <Routes />
      </RecoilRoot>
    </NavigationContainer>
  );
}

{
  Platform.OS == "web" ? injectWebCss() : null;
}
