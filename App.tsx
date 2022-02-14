import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import LayoutProvider from "./src/context/layout/layout.provider";
import { SafeAreaView } from 'react-native';
import { primary_color } from './assets/colors';

export default function App() {

  return (
    <NavigationContainer>
      <LayoutProvider>
        <SafeAreaView style={{ flex: 1 , backgroundColor: primary_color }}>
          <Routes />
        </SafeAreaView>
      </LayoutProvider>
    </NavigationContainer>
  );
}
