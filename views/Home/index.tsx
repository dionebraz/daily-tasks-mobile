import { Alert, FlatList, Image, Text, View } from "react-native";
import { Task } from "@/app/components/Task";
import { styles } from "./styles";
import { InputTask } from "@/app/components/InputTask";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface TaskItem {
  id: string;
  title: string;
}

export function HomeScreen() {
  const [tasks, setTasks] = useState<TaskItem[]>([]); // Estado para armazenar as tarefas
  const [editingTask, setEditingTask] = useState<TaskItem | null>(null); // Estado para a tarefa que está sendo editada

  // Função para carregar tarefas salvas no AsyncStorage
  const loadTasks = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem("tasks");
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks) as TaskItem[]); // Atualiza o estado com as tarefas salvas
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar as tarefas.");
      console.error(error);
    }
  };

  // Função para adicionar uma nova tarefa
  const addTask = async (newTask: string) => {
    try {
      const updatedTasks: TaskItem[] = [
        ...tasks,
        { id: String(Date.now()), title: newTask },
      ];
      setTasks(updatedTasks);
      await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
    } catch (error) {
      Alert.alert("Erro", "Não foi possível adicionar a tarefa.");
      console.error(error);
    }
  };

  const editTask = async (id: string, newTitle: string) => {
    try {
      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      );
      setTasks(updatedTasks);
      await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setEditingTask(null); // Limpar tarefa editada após salvar
    } catch (error) {
      Alert.alert("Erro", "Não foi possível editar a tarefa.");
      console.error(error);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      const updatedTasks = tasks.filter((task) => task.id !== id);
      setTasks(updatedTasks);
      await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
    } catch (error) {
      Alert.alert("Erro", "Não foi possível excluir a tarefa.");
      console.error(error);
    }
  };

  // Carregar tarefas ao montar o componente
  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.task_container}>
        <Text style={styles.title}>Suas tarefas:</Text>
        {tasks.length > 0 ? (
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Task
                title={item.title}
                taskId={item.id}
                onEdit={setEditingTask} // Passa a função para o componente Task
                isEditing={editingTask?.id === item.id} // Passa se é a tarefa que está sendo editada
                onSave={editTask} // Passa a função de salvar
                onDelete={deleteTask} // Passa a função de excluir
              />
            )}
          />
        ) : (
          <View style={styles.empty_tasks}>
            <Image
              source={require("../../assets/images/hero_image.png")}
              style={styles.hero_image}
            />
            <Text style={styles.empty_tasks_text}>Nenhuma tarefa criada!</Text>
          </View>
        )}
      </View>
      <InputTask onAddTask={addTask} />
    </View>
  )
}