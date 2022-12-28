import { StyleSheet } from "react-native";
import { fonts } from "../../style";

export const termStyles = StyleSheet.create({
  container: {
    minWidth: 350,
    minHeight: 50,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderTopWidth: 0,
    borderBottomWidth: 1,

    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: "grey",
    backgroundColor: "#E1E8EE",
  },
  roundedBottom: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
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
    fontSize: 10,
  },
  nameContainer: {
    flex: 6,
    flexDirection: "row",
  },
  typeContainer: {
    flex: 4,
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    ...fonts.primary,
    color: "grey",
    fontSize: 16,
    padding: 10,
  },
});
