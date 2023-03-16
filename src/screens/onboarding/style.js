import { StyleSheet } from "react-native";
import { color } from "../../color";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  splastText: {
    fontSize: 40,
    color: color.white,
    fontWeight: "bold",
  },
  smallWrapper: {
    display: "flex",
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop: 5,
  },
  paragraphText: {
    fontSize: 10,
    color: color.white,
  },
});
