import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import fonts from "../../assets/fonts";

interface HomeProps {
  
};

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontFamily: fonts.body,
  }
});