import { COLORS } from "@/app/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input_box: {
    width: "100%",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: 0,
    padding: 10,
    gap: 16,
    backgroundColor: COLORS.primary
  },

  input: {
    flex: 1,
    borderRadius: 4,
    padding: 16,
    color: COLORS.white,
    backgroundColor: COLORS.inputBG
  },

  input_button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: COLORS.green
  },

  button_text: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.white,
  }
})