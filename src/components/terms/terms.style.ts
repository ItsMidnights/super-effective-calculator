import { StyleSheet } from "react-native"

export const termStyles = StyleSheet.create({
  container: {
    minWidth: 350,
    minHeight: 50,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "grey",
    backgroundColor: "#E1E8EE",
  },
  bubble: {
    position: "absolute",
    backgroundColor: "red",
    top: "0%",
    left: "93.5%",
    padding: 3,
    marginHorizontal: 5,
    borderRadius: 20,
  },
  bubbleText: {
    fontSize: 10
  },
  nameContainer: {
    flex: 6,
    flexDirection: "row"
  },
  typeContainer: {
    flex: 4,
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  name: {
    // fontFamily: "Roboto_300Light",
    color: "grey",
    fontSize: 16,
    padding: 10,
  }
});