import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

const AddTodo = props => {
  const [text, setText] = useState("");

  const handleChange = value => {
    setText(value);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="now todo ..."
        onChangeText={handleChange}
        value={text}
      />
      <Button
        onPress={() => {
          props.handleSubmit(text, () => {
            handleChange("");
          });
        }}
        title="add todo"
        color="gray"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  }
});
export default AddTodo;
