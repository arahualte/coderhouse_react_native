import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Task from "../components/Task";
import { addTask, removeTask } from "../redux/actions/taskActions";
import uuid from "uuidv4";

export const Home = () => {
  const [taskText, setTaskText] = useState();
  const taskItems = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    Keyboard.dismiss();
    dispatch(addTask({ id: uuid(), text: taskText }));
    setTaskText("");
  };

  const completeTask = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.titleWrapper}>
        <Text style={styles.sectionTitle}>Welcome!</Text>
      </KeyboardAvoidingView>

      <ScrollView>
        <View style={styles.tasksWrapper}>
          <View style={styles.items}>
            {taskItems
              ? taskItems.map((task) => {
                  return (
                    <TouchableOpacity
                      key={task.id}
                      onPress={() => completeTask(task.id)}
                    >
                      <Task text={task.text} />
                    </TouchableOpacity>
                  );
                })
              : null}
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={taskText}
          onChangeText={(text) => setTaskText(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  titleWrapper: {
    flexDirection: "column",
    width: "100%",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  tasksWrapper: {
    paddingBottom: 90,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#edf2fb",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
    marginBottom: 20,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#edf2fb",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
});
