import React from "react";
import {
  ScrollView, StyleSheet
} from "react-native";
import fonts from "../../assets/fonts";
import { Title } from "../components/font-based";
import { colors } from "../style/colors";

interface HomeProps {
  
};

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <ScrollView contentContainerStyle={[styles.container, colors.primaryBackground]}>
      <Title>
        Home
      </Title>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontFamily: fonts.body,
  }
});