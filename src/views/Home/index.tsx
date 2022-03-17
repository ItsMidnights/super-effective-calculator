import React from "react";
import { SafeAreaView, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeContainer } from "../../components/safe-container";
import { AwareStatusBar } from "../../components/status-bar";

interface HomeProps {
  navigation: any;
}

export const Home: React.FC<HomeProps> = () => {
  const [searchBarShown, setSearchBarShown] = React.useState(false);

  // TODO #23 Home Componet Compartmentalization
  // TODO #22 Pokemon Component implementation
  return (
    <SafeContainer
      style={{
        backgroundColor: "grey",
      }}
    >
      <AwareStatusBar />
      {/* <TextInput
        style={{
          // display: searchBarShown ? "flex" : "none",
          backgroundColor: "white",
          fontSize: 24,
        }}
        placeholder={"Search for a pokemon"}
      /> */}
      <View></View>
    </SafeContainer>
  );
};
