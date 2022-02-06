import React, { useContext } from "react";
import {
  ScrollView, StyleSheet
} from "react-native";
import fonts from "../../assets/fonts";
import { Title } from "../components/font-based";
import { layoutContext } from "../context";
import { colors } from "../style/colors";

interface HomeProps {
  
};

export const Home: React.FC<HomeProps> = ({}) => {

  const { layout } = useContext(layoutContext);

  return (
    <ScrollView contentContainerStyle={[styles.container, colors.primaryBackground]}>
      <Title>
        {
          layout
        }
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