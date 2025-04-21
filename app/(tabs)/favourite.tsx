import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { router } from "expo-router";

const popularShoes1 = [
  {
    id: "1",
    name: "Nike Jordan",
    price: "$302.00",
    image: require("@/assets/images/basket1.png"),
    favorite: <Feather name="heart" size={24} color="black" />,
  },
  {
    id: "2",
    name: "Nike Air Max",
    price: "$752.00",
    image: require("@/assets/images/basket2.png"),
    favorite: <Feather name="heart" size={24} color="black" />,
  },
];

const popularShoes2 = [
  {
    id: "1",
    name: "Nike Club Max",
    price: "$72.00",
    image1: require("@/assets/images/nike-ah.png"),
    favorite: <Feather name="heart" size={24} color="black" />,
  },

  {
    id: "2",
    name: "Nike Air Max",
    price: "$752.00",
    image1: require("@/assets/images/pngaaa.png"),
    favorite: <Feather name="heart" size={24} color="black" />,
  },
];

const FavouriteScreen = () => {
  const [liked, setLiked] = useState(false);
  return (
    <ScrollView style={styles.containerScroll}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.replace("/accueil")}
          >
            <Feather name="chevron-left" size={24} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.title}>Favourite</Text>
          <View style={styles.containteBag}>
            <Image source={require("@/assets/images/bag-2.png")} />
          </View>
        </View>

        <FlatList
          data={popularShoes1}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.shoeCard}>
              <TouchableOpacity>{item.favorite}</TouchableOpacity>
              <Image source={item.image} style={styles.shoeImage} />
              <Text style={styles.shoeTitle}>BEST SELLER</Text>
              <Text style={styles.shoeName}>{item.name}</Text>
              <View style={styles.shoePriceCont}>
                <Text style={styles.shoePrice}>{item.price}</Text>
                <View style={styles.button}>
                  <TouchableOpacity
                    style={styles.addButton1}
                  ></TouchableOpacity>
                  <TouchableOpacity
                    style={styles.addButton2}
                  ></TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />

        <FlatList
          data={popularShoes2}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.shoeCard}>
              <TouchableOpacity>{item.favorite}</TouchableOpacity>
              <Image source={item.image1} style={styles.shoeImage} />
              <Text style={styles.shoeTitle}>BEST SELLER</Text>
              <Text style={styles.shoeName}>{item.name}</Text>
              <View style={styles.shoePriceCont}>
                <Text style={styles.shoePrice}>{item.price}</Text>
                <View style={styles.button}>
                  <TouchableOpacity
                    style={styles.addButton3}
                  ></TouchableOpacity>
                  <TouchableOpacity
                    style={styles.addButton4}
                  ></TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />

        {/* Bottom Navigation */}
        {/* <View style={styles.bottomNav}>
          <Ionicons name="home" size={24} color="black" />
          <Ionicons name="heart-outline" size={24} color="gray" />
          <TouchableOpacity style={styles.cartButton}>
            <Ionicons name="bag-outline" size={24} color="white" />
          </TouchableOpacity>
          <Ionicons name="chatbubble-outline" size={24} color="gray" />
          <Ionicons name="person-outline" size={24} color="gray" />
        </View> */}
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
  backButton: {
    // marginBottom: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  icon: {
    color: "#9CA3AF",
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

  // Popular Shoes Card
  shoeCard: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    width: 160,
    borderRadius: 14,
    marginRight: 10,
    marginTop: 10,
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
  shoeName: { marginVertical: 5, color: "#707B81", fontSize: 16 },
  shoePrice: { color: "#2B2B2B", marginBottom: 5, fontWeight: "bold" },
  shoePriceCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginTop: 10,
    gap: 10,
  },
  addButton1: {
    backgroundColor: "#CB1D1D",
    width: 15,
    height: 15,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  addButton2: {
    backgroundColor: "#0B2F8B",
    width: 15,
    height: 15,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  addButton3: {
    backgroundColor: "#2256B9",
    width: 15,
    height: 15,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  addButton4: {
    backgroundColor: "#A9CFEB",
    width: 15,
    height: 15,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
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

export default FavouriteScreen;
