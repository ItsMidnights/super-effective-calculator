import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import Store from "./src/data/store";
import LayoutProvider from "./src/context/layout/layout.provider";
import { Routes } from "./src/routes";
import { Platform, StatusBar } from "react-native";
import { injectWebCss } from "./src/functions/util";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={Store}>
        <LayoutProvider>
          <StatusBar barStyle={"light-content"} backgroundColor={"#998FC7"} />
          <Routes />
        </LayoutProvider>
      </Provider>
    </NavigationContainer>
  );
}

{
  Platform.OS == "web" ? injectWebCss() : null;
}
