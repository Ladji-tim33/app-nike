import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { router } from "expo-router";

const popularShoes = [
  {
    id: "1",
    name: "Nike Jordan",
    price: "$302.00",
    image: require("@/assets/images/basket1.png"),
    isLiked: false,
  },
  {
    id: "2",
    name: "Nike Air Max",
    price: "$752.00",
    image: require("@/assets/images/basket2.png"),
    isLiked: false,
  },
];

const HomeScreen = () => {
  return (
    <ScrollView style={styles.containerScroll}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={require("@/assets/images/Hamburger.png")} />
          <Text
            style={styles.title}
            onPress={() => router.replace("/pageRecherche")}
          >
            Explore
          </Text>
          <TouchableOpacity
            onPress={() => router.replace("/myCart")}
            style={styles.containteBag}
          >
            <Image source={require("@/assets/images/bag-2.png")} />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.warapper}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#777" />
            <TextInput style={styles.input} placeholder="Looking for shoes" />
          </View>

          <View style={styles.filterIcon}>
            <Image source={require("@/assets/images/sliders.png")} />
          </View>
        </View>
        {/* Category Section */}
        <View style={styles.categoryContainer}>
          <TouchableOpacity style={styles.categoryBtn}>
            <Text style={styles.categoryText}>All Shoes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoryBtn, styles.activeCategory]}>
            <Text style={styles.activeCategoryText}>Outdoor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryBtn}>
            <Text style={styles.categoryText}>Tennis</Text>
          </TouchableOpacity>
        </View>

        {/* Popular Shoes */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Shoes</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        <FlatList
          data={popularShoes}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.shoeCard}>
              <TouchableOpacity onPress={() => router.replace("/favourite")}>
                <Feather
                  name="heart"
                  size={24}
                  color={item.isLiked ? "red" : "black"}
                />
              </TouchableOpacity>
              <Image source={item.image} style={styles.shoeImage} />
              <Text
                style={styles.shoeTitle}
                onPress={() => router.replace("/favourite")}
              >
                BEST SELLER
              </Text>
              <Text style={styles.shoeName}>{item.name}</Text>
              <Text style={styles.shoePrice}>{item.price}</Text>
              <TouchableOpacity style={styles.addButton}>
                <Ionicons name="add" size={20} color="white" />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />

        {/* New Arrivals */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>New Arrivals</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        <View style={styles.newArrivalCard}>
          <View>
            <Text style={styles.discountText}>Summer Sale</Text>
            <Text style={styles.discountAmount}>15% OFF</Text>
          </View>
          <Image
            source={require("@/assets/images/Nike-Zoom.png")}
            style={styles.newArrivalImage}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerScroll: {
    flex: 1,
    backgroundColor: "#F7F7F9",
    paddingHorizontal: 16,
  },

  container: {
    marginBottom: 100,
  },

  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },
  title: { fontSize: 24, fontWeight: "bold" },

  containteBag: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  // Search Bar
  warapper: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    marginTop: 10,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 5,
    width: 260,
  },
  input: { flex: 1, marginLeft: 10, fontSize: 16 },
  filterIcon: {
    backgroundColor: "#007AFF",
    width: 50,
    height: 50,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  // Categories
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  categoryBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: "#F3F3F3",
  },
  categoryText: { color: "#555" },
  activeCategory: { backgroundColor: "#007AFF" },
  activeCategoryText: { color: "#fff" },

  // Section Headers
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold" },
  seeAll: { color: "#007AFF" },

  // Popular Shoes Card
  shoeCard: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    width: 160,
    borderRadius: 14,
    marginRight: 10,
    marginTop: 20,
    position: "relative",
  },
  shoeImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginStart: 20,
  },
  shoeTitle: {
    color: "#0D6EFD",
    fontWeight: "bold",
  },
  shoeName: { marginVertical: 10, color: "#707B81", fontSize: 16 },
  shoePrice: { color: "#2B2B2B", marginBottom: 5, fontWeight: "bold" },
  addButton: {
    backgroundColor: "#007AFF",
    width: 32,
    height: 37,
    borderTopStartRadius: 20,
    borderBottomEndRadius: 16,
    position: "absolute",
    bottom: 0,
    right: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  // New Arrivals
  newArrivalCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 15,

    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  discountText: {
    fontSize: 12,
    color: "#3B3B3B",
  },
  discountAmount: {
    color: "#674DC5",
    fontSize: 30,
    fontWeight: "bold",
  },
  newArrivalImage: {
    width: 100,
    height: 100,
    marginLeft: "auto",
  },

  // Bottom Navigation
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "#ddd",
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
  },
  cartButton: { backgroundColor: "#007AFF", padding: 12, borderRadius: 50 },
});

export default HomeScreen;
