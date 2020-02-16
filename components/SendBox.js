import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SendBox = () => (
  <View style={styles.container}>
    <Text style={styles.one}>one</Text>
    <Text style={styles.two}>two</Text>
    <Text style={styles.three}>three</Text>
    <Text style={styles.four}>four</Text>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 40,
    backgroundColor: "#ddd",
    flex: 1
  },
  one: {
    backgroundColor: "violet",
    padding: 10,
    flex: 1
  },
  two: {
    backgroundColor: "gold",
    padding: 10,
    flex: 1
  },
  three: {
    backgroundColor: "coral",
    padding: 10,
    flex: 1
  },
  four: {
    backgroundColor: "skyblue",
    padding: 10,
    flex: 1
  }
});

export default SendBox;
