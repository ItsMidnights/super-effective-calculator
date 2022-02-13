import { StyleSheet } from "react-native"

export const termStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "grey",
    width: 200,
    maxWidth: 400,
    backgroundColor: "#E1E8EE",
    // backgroundColor: "#E1E8E"
  },
  name: {
    // fontFamily: "Roboto_300Light",
    color: "grey",
    fontSize: 16,
    padding: 10,
  }
});