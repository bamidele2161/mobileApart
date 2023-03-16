import { StyleSheet, Text, View } from "react-native";
import { color } from "../../color";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  buttonContainer: {
    borderRadius: 4,
    width: "100%",
    backgroundColor: color.primaryColor,
    paddingVertical: 12,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  buttonText: {
    color: color.white,
  },
});
