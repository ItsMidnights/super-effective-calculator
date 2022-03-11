import { NavigationContainer } from "@react-navigation/native";
import LayoutProvider from "./src/context/layout/layout.provider";
import { Routes } from "./src/routes";
import { Platform, StatusBar } from "react-native";
import { injectWebCss } from "./src/functions/util";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <NavigationContainer>
      <RecoilRoot>
        {/* <LayoutProvider> */}
        <StatusBar barStyle={"light-content"} backgroundColor={"#998FC7"} />
        <Routes />
        {/* </LayoutProvider> */}
      </RecoilRoot>
    </NavigationContainer>
  );
}

{
  Platform.OS == "web" ? injectWebCss() : null;
}
