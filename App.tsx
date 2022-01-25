import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import Colors from "./assets/colors";
import Fonts from "./assets/fonts/";
import { Routes } from './src/routes';

export default function App() {

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { 
    fontSize: 30,
    color: Colors.text,
    fontFamily: Fonts.header,
  }
});
