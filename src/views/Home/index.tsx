import React from "react";
import { SafeAreaView, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

interface HomeProps {
  navigation: any;
}

export const Home: React.FC<HomeProps> = () => {
  const [searchBarShown, setSearchBarShown] = React.useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "grey",
      }}
    >
      {/* <TextInput
        style={{
          // display: searchBarShown ? "flex" : "none",
          backgroundColor: "white",
          fontSize: 24,
        }}
        placeholder={"Search for a pokemon"}
      /> */}
      <View></View>
    </SafeAreaView>
  );
};
