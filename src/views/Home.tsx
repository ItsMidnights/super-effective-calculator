import React from "react";
import {
  ScrollView, StyleSheet, TextInput
} from "react-native";
import fonts from "../../assets/fonts";
import { Title } from "../components/font-based";
import { SearchBar } from "../components/input";
import { layoutContext } from "../context/layout";
import { ScreenProps } from "../routes/routes.types";
import { colors } from "../style/colors";
import { Back } from "../components/icons";
import { Ionicons } from "@expo/vector-icons";

export const Home: React.FC<ScreenProps> = ({}) => {

  const [query, setQuery] = React.useState("");
  const { layout } = React.useContext(layoutContext);

  return (
    <ScrollView contentContainerStyle={[
      styles.container, 
      colors.purpleBackground
    ]}>
      <SearchBar 
        placeholder="Search for a Pokemon"
        value={query} 
        onChangeText={(text) => setQuery(text)}
        // searchIcon={
        //   <Ionicons 
        //     name="arrow-back" 
        //     size={24} 
        //     color="grey"
        //   />
        // }
      />
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