import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "./SearchBar";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ margin: 20 }}>
        <Text style={styles.text}>
          Bienvenue sur votre application météo favorite Entrez une ville
        </Text>
        <SearchBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: `rgb(63,94,251)`,
  },
  text: {
    margin: 20,
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  searchBar: {},
});
