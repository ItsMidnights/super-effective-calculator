import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import LayoutProvider from "./src/context/layout/layout.provider";
import { SafeAreaView } from 'react-native';

export default function App() {

  return (
    <NavigationContainer>
      <LayoutProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Routes />
        </SafeAreaView>
      </LayoutProvider>
    </NavigationContainer>
  );
}
