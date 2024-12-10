import { useState } from "react";
import { COLORS } from "@/app/theme";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface InputTaskProps {
  onAddTask: (task: string) => void; // Função que recebe a tarefa
}

export function InputTask({ onAddTask }: InputTaskProps) {
  const [task, setTask] = useState(""); // Estado para o texto do input

  const handleAddTask = () => {
    if (task.trim() === "") {
      Alert.alert("Aviso", "Digite uma tarefa antes de adicionar!");
      return;
    }

    onAddTask(task); // Chama a função passada via props para adicionar a tarefa
    setTask(""); // Limpa o campo de texto
  };

  return (
    <View style={styles.input_box}>
      <TextInput
        keyboardType="default"
        style={styles.input}
        placeholder="Digite sua tarefa..."
        placeholderTextColor={COLORS.white}
        value={task} // Valor controlado pelo estado
        onChangeText={setTask} // Atualiza o estado ao digitar
      />
      <TouchableOpacity style={styles.input_button} onPress={handleAddTask}>
        <Text style={styles.button_text}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  )
}