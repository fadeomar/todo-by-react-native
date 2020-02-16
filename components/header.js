import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.title}>Todo App</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    height: 80,
    padding: 40,
    backgroundColor: "tomato"
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    color: "gray"
  }
});
export default Header;
