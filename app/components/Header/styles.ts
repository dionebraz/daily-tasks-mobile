import { COLORS } from "@/app/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  baseText: {
    fontSize: 28,
    fontWeight: "900",
    textAlign: "center",
    color: COLORS.white,
    paddingTop: 4,
    backgroundColor: COLORS.background,
  },

  span: {
    color: COLORS.blue
  }
})