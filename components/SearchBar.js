import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";

export default function SearchBar() {
  return (
    <View style={styles.BackgroundStyle}>
      <Feather style={styles.IconStyle} name="search" size={24} color="black" />
      <TextInput
        style={styles.InputStyle}
        placeholder="Ara"
        autoCapitalize="none"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  BackgroundStyle: {
    backgroundColor: "lightgray",
    flexDirection: "row",
    margin: 10,
    height: 50,
    alignItems: "center",
    borderRadius: 20,
  },
  IconStyle: {
    marginHorizontal: 10,
    fontSize: 30,
  },
  InputStyle: {
    flex: 1,
    fontSize: 18,
  },
});
