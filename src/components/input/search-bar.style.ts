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
    borderWidth: 0,
  },
  searchBarContainerFresh: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 0,
  },
  inputContainer: {
    backgroundColor: "#E1E8EE",
    borderRadius: 25,
    borderWidth: 0,
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
