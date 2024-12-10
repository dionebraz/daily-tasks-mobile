import { COLORS } from "@/app/theme";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from "./styles";
import { useState } from "react";

interface TaskProps {
  title: string;
  taskId: string;
  onEdit: (task: { id: string; title: string }) => void; // Função para indicar que a tarefa deve ser editada
  isEditing: boolean; // Se essa tarefa está sendo editada
  onSave: (id: string, newTitle: string) => void; // Função para salvar a tarefa editada
  onDelete: (id: string) => void; // Função para excluir a tarefa
}

export function Task({ title, taskId, onEdit, isEditing, onSave, onDelete }: TaskProps) {
  const [editedTitle, setEditedTitle] = useState(title);
  const [showEditModal, setShowEditModal] = useState(false); // Modal para edição
  const [showViewModal, setShowViewModal] = useState(false); // Modal para exibir texto completo

  const handleView = () => {
    setShowViewModal(true); // Abre o modal de visualização
  };

  const handleSave = () => {
    if (editedTitle.trim() !== "") {
      onSave(taskId, editedTitle); // Chama a função para salvar a tarefa
      setShowEditModal(false); // Fecha o modal após salvar
    }
  };

  const handleCancel = () => {
    setEditedTitle(title); // Restaura o título original se cancelar
    setShowEditModal(false); // Fecha o modal
  };

  return (
    <View style={styles.task_container}>
      <TouchableOpacity
        onPress={handleView} // Mostra o modal ao clicar no item
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          width: 230,
        }}
      >
        <BouncyCheckbox
          style={{ width: 26 }}
          size={24}
          fillColor={COLORS.blue}
          innerIconStyle={{ borderWidth: 2 }}
        />
        <Text style={styles.task_text} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
        <TouchableOpacity
          style={{ flexDirection: "row", gap: 4, alignItems: "center" }}
          onPress={() => setShowEditModal(true)} // Abre o modal ao clicar em "Editar"
        >
          <Text style={styles.task_line}>|</Text>
          <Text style={styles.task_edit_button}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(taskId)}>
          <Text style={styles.task_delete_button}>Excluir</Text>
        </TouchableOpacity>
      </View>

      {/* Modal para edição */}
      <Modal
        transparent={true}
        visible={showEditModal}
        animationType="slide"
        onRequestClose={handleCancel} // Fechar modal se pressionar o "back" no Android
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Tarefa</Text>
            <TextInput
              style={styles.modalInput}
              value={editedTitle}
              onChangeText={setEditedTitle} // Atualiza o título enquanto edita
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={handleSave} style={styles.modalButtonSave}>
                <Text style={styles.modalButtonText}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCancel} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal para exibir o texto completo */}
      <Modal
        transparent={true}
        visible={showViewModal}
        animationType="fade"
        onRequestClose={handleView} // Fechar modal no botão "voltar"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.viewModalContent}>
            {/* <Text style={styles.modalTitle}>Tarefa:</Text> */}
            <Text style={styles.fullTaskText}>{title}</Text>
            <TouchableOpacity onPress={() => setShowViewModal(false)} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}