import { COLORS } from "@/app/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  task_container: {
    flex: 1,
    padding: 12,
    marginBottom: 4,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: COLORS.background,
    backgroundColor: COLORS.inputBG,
  },

  task_text: {
    width: "85%",
    color: COLORS.white,
  },

  task_line: {
    color: COLORS.secondary,
  },

  task_edit_button: {
    fontSize: 11,
    color: COLORS.secondary
  },

  task_delete_button: {
    fontSize: 11,
    color: COLORS.red,
  },

  // Estilos para o modal
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    width: "80%",
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalButton: {
    padding: 10,
    width: "45%",
    borderRadius: 5,
    alignSelf: "center",
    backgroundColor: COLORS.blue,
  },
  modalButtonSave: {
    padding: 10,
    width: "45%",
    borderRadius: 5,
    backgroundColor: COLORS.green,
  },
  modalButtonText: {
    color: COLORS.white,
    textAlign: "center",
    fontWeight: '700',
  },
  viewModalContent: {
    backgroundColor: COLORS.white,
    padding: 3,
    paddingBottom: 16,
    width: "80%",
    borderRadius: 10,
  },
  fullTaskText: {
    fontSize: 14,
    marginBottom: 16,
    textAlign: "center",
    borderRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: 16,
    color: COLORS.secondary,
    backgroundColor: COLORS.background,
  },
})