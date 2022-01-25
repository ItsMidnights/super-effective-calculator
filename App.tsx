import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from 'react-native';
import Colors from "./assets/colors";
import Fonts, { preloadedFonts } from "./assets/fonts/";
import { Splash } from './src/Views/Utility/splash';

export default function App() {

  let [fontsLoaded] = useFonts({
    ...preloadedFonts,
  });

  if (!fontsLoaded) {
    return <Splash loop/>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hey there...</Text>
    </View>
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
