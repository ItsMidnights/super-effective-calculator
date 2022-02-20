import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import LayoutProvider from "./src/context/layout/layout.provider";
import { SafeAreaView } from 'react-native';
import { primary_color } from './assets/colors';
import { Provider } from 'react-redux';
import { store } from "./src/data/state";

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <LayoutProvider>
          <SafeAreaView style={{ flex: 1 , backgroundColor: primary_color }}>
            <Routes />
          </SafeAreaView>
        </LayoutProvider>
      </NavigationContainer>
    </Provider>
  );
}
