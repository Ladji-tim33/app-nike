import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { router } from "expo-router";

const recentSearches = [
  "New Shoes",
  "Nike Top Shoes",
  "Nike Air Force",
  "Shoes",
  "Snakers Nike Shoes",
  "Regular Shoes",
];

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.replace("/profile")}
        >
          <Feather name="chevron-left" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Search</Text>
        <TouchableOpacity onPress={() => router.replace("/profile")}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Feather
          name="search"
          size={20}
          color="#aaa"
          style={{ marginHorizontal: 10 }}
        />
        <TextInput placeholder="Search Your Shoes" style={styles.input} />
        <Feather
          name="mic"
          size={20}
          color="#aaa"
          style={{
            marginHorizontal: 10,
            borderLeftWidth: 0.5,
            padding: 5,
            borderLeftColor: "grey",
          }}
        />
      </View>

      {/* Title */}
      <Text style={styles.sectionTitle}>Shoes</Text>

      {/* Recent Searches */}
      <FlatList
        data={recentSearches}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.recentItem}>
            <Ionicons name="time-outline" size={20} color="#999" />
            <Text style={styles.recentText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: "#F7F7F7",
    borderRadius: 100,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cancelText: {
    color: "#007BFF",
    fontWeight: "600",
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 8,
    elevation: 2, // For Android shadow
    shadowColor: "#000", // For iOS shadow
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  sectionTitle: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  recentText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
});
