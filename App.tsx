import "reflect-metadata";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";
import LayoutProvider from "./src/context/layout/layout.provider";
import { SafeAreaView, Platform } from "react-native";
import { primary_color } from "./assets/colors";
import { injectWebCss } from "./src/functions/util";
import { DatabaseConnectionProvider } from "./src/context/pokemon";

export default function App() {
  return (
    <NavigationContainer>
      <DatabaseConnectionProvider>      
        <LayoutProvider>
          <SafeAreaView style={{ flex: 1, backgroundColor: primary_color }}>
            <Routes />
          </SafeAreaView>
        </LayoutProvider>
      </DatabaseConnectionProvider>
    </NavigationContainer>
  );
}

{
  Platform.OS == "web" ? injectWebCss() : null;
}
