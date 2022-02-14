import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { colors } from "../../style/colors";
import { flex } from "../../style/util/flex";


export const SafeAreaWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <SafeAreaView
      style={[
        flex.one,
        colors.purpleBackground,
      ]} 
    >
      { children }
    </SafeAreaView>
  );
};
