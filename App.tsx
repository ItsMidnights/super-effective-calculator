import { NavigationContainer } from "@react-navigation/native";
import LayoutProvider from "./src/context/layout/layout.provider";
import { HomeNavigator, Routes } from "./src/routes";
import { Platform, SafeAreaView, StatusBar } from "react-native";
import { injectWebCss } from "./src/functions/util";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <NavigationContainer>
      <RecoilRoot>
        {/* <LayoutProvider> */}
        <StatusBar barStyle={"dark-content"} backgroundColor={"#998FC7"} />
        <SafeAreaView style={{ flex: 1 }}>
          {/* <Routes /> */}
          <HomeNavigator />
        </SafeAreaView>
        {/* </LayoutProvider> */}
      </RecoilRoot>
    </NavigationContainer>
  );
}

{
  Platform.OS == "web" ? injectWebCss() : null;
}
