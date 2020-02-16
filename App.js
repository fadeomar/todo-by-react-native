import React, { useState } from "react";
import Header from "./components/header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Alert,
  Keyboard
} from "react-native";

const App = () => {
  const [todos, settodo] = useState([
    { todo: "Eating breakfast", key: 1 },
    { todo: "Watch the Clasico match", key: 2 },
    { todo: "Create an App", key: 3 }
  ]);

  const handlePress = key => {
    settodo(old => old.filter(item => item.key !== key));
  };

  const addTodo = (text, cb) => {
    if (text.length > 3) {
      settodo(old => {
        let bigId = old.reduce(
          (asd, item) => (asd > item.key ? asd : item.key),
          0
        );

        return [{ todo: text, key: bigId + 1 }, ...old];
      });
      cb();
    } else {
      Alert.alert("Opps", "add good todo ", [
        { text: "understand", onPress: () => console.log("clooooosed") }
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          {/* form */}
          <AddTodo handleSubmit={addTodo} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} handlePress={handlePress} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    flex: 1,
    padding: 40,
    backgroundColor: "pink"
  },
  list: {
    backgroundColor: "yellow",
    marginTop: 20,
    flex: 1
  }
});

export default App;
