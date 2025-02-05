import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import db from "./firebase";

interface Todo {
  id: string;
  todo: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  // Fetch todos from Firebase on component mount
  useEffect(() => {
    const unsubscribe = db
      .collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot: firebase.firestore.QuerySnapshot) => {
        setTodos(
          snapshot.docs.map((doc: firebase.firestore.QueryDocumentSnapshot) => ({
            id: doc.id,
            todo: doc.data().todo as string,
          }))
        );
      });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  // Add a new todo to Firestore
  const addTodo = () => {
    if (input.trim() === "") return;

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput(""); // Clear input field
  };

  // Delete a todo from Firestore
  const deleteTodo = (id: string) => {
    db.collection("todos").doc(id).delete();
  };

  return (
    <View style={{ flex: 1, padding: 20, marginTop: 50, backgroundColor: "white" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Todo List</Text>

      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Enter a todo..."
        style={{
          borderWidth: 1,
          padding: 10,
          marginVertical: 10,
          borderRadius: 5,
          backgroundColor: "#f9f9f9", // Light gray background for input
        }}
      />

      <Button title="Add Todo" onPress={addTodo} />

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              borderBottomWidth: 1,
              backgroundColor: "#f0f0f0", // Light background for each item
              borderRadius: 5,
              marginVertical: 5,
            }}
          >
            <Text>{item.todo}</Text>
            <TouchableOpacity onPress={() => deleteTodo(item.id)}>
              <Text style={{ color: "red" }}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default App;
