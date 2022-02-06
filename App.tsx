import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import LayoutProvider from "./src/components/util/layout.component";

export default function App() {

  return (
    <NavigationContainer>
      <LayoutProvider>
        <Routes />
      </LayoutProvider>
    </NavigationContainer>
  );
}
