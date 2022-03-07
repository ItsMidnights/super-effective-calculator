import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Back } from "../../../components/icons";
import { H1 } from "../../../components/text";

export type HeaderProps = {
  name: string;
}

export const Header: React.FC<HeaderProps> = ({
  name,
}): JSX.Element => {

  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Back 
          color="white"
          size={40}
          onPress={() => navigation.goBack()}
        />

        <H1 style={styles.headerText}>
          {name.toLocaleUpperCase()}
        </H1>

        <View style={styles.blank} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15 
  },
  headerText: {
    fontSize: 15 
  },
  blank: {
    height: 40,
    width: 40
  }
});