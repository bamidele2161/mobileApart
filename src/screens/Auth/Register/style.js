import { StyleSheet, Text, View } from "react-native";
import { color } from "../../../color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 600,
    alignSelf: "center",
    color: color.titleColor,
  },

  formContainer: {
    marginTop: 40,
    display: "flex",
    gap: 16,
  },
});
