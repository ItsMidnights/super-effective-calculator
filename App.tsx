import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import LayoutProvider from "./src/context/layout/layout.provider";

export default function App() {

  return (
    <NavigationContainer>
      <LayoutProvider>
        <Routes />
      </LayoutProvider>
    </NavigationContainer>
  );
}
