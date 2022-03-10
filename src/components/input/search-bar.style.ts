import { Platform, StyleSheet } from "react-native";
import { fonts } from "../../style";

export const searchBarStyles = StyleSheet.create({
  container: {
    minWidth: "90%",
    ...Platform.select({
      ios: {},
    }),
  },
  searchBarContainer: {
    borderRadius: 25,
  },
  inputContainer: {
    backgroundColor: "#E1E8EE",
    borderRadius: 25,
  },
  input: {
    ...fonts.primary,
    color: "grey",
    fontSize: 16,
  },
  rightContainer: {
    padding: 10,
  },
});

// export const layoutSpecific = StyleSheet.create({
//   mobile: StyleSheet.create({
//     ...searchFormStyles,
//   }),
//   tablet: StyleSheet.create({
//     ...searchFormStyles
//   }),
//   web: StyleSheet.create({
//     ...searchFormStyles,
//   }),
// });
