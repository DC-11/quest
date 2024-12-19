import React from "react";
import { View, Text, TextInput, StyleSheet, Pressable, Touchable } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Make sure to install expo/vector-icons

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={25} color="#000" style={styles.icon} />
        <TextInput
          placeholder="Where to?"
          style={styles.input}
          editable={false} // Prevent typing if it's static
        />
        <Text style={styles.placeholderText}>
          Anywhere · Any week · Add guests
        </Text>
      </View>
      
      <Pressable style={styles.filterButton}>
        <Ionicons name="options-outline" size={18} color="#000" />
      </Pressable>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  icon: {
    marginRight: 10,
    flex:1,
  },
  input: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    flex: 1,
  },
  placeholderText: {
    fontSize: 14,
    color: "#888",
    marginLeft: 10,
  },
  filterButton: {
    marginLeft: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
