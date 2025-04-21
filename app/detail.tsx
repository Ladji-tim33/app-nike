import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";

const ProductDetail = ({ navigation }) => {
  const [liked, setLiked] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const product = {
    name: "Nike Air Max 270 Essential",
    category: "Men's Shoes",
    price: "$179.39",
    description:
      "The Max Air 270 unit delivers unrivaled, all-day comfort. The sleek, running-inspired design roots you to everything Nike......",
    images: [
      require("@/assets/images/Hero_Image.png"),
      require("@/assets/images/PngItem.png"),
      require("@/assets/images/baske_carousel1.png"),
      require("@/assets/images/baske_carousel2.png"),
      require("@/assets/images/Nike-Shoe.png"),
    ],
  };

  return (
    <ScrollView style={styles.containerScroll}>
      <View>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.replace("/accueil")}
          >
            <Feather name="chevron-left" size={24} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.shopTitle}>Sneaker Shop </Text>
          <View style={styles.containteBag}>
            <Image source={require("@/assets/images/bag-2.png")} />
          </View>
        </View>

        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Image
          source={require("@/assets/images/Hero_Image.png")}
          style={styles.mainImage}
        />
        <View style={styles.carouselContainer}>
          <FlatList
            data={product.images}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Image source={item} style={styles.smallImage} />
            )}
          />
        </View>
        <Text style={styles.description}>
          {showFullText
            ? product.description
            : product.description.slice(0, 100)}
          {product.description.length > 100 && (
            <Text
              style={styles.readMore}
              onPress={() => setShowFullText(!showFullText)}
            >
              {showFullText ? " Show Less" : " Read More"}
            </Text>
          )}
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.containteBag}
            onPress={() => setLiked(!liked)}
          >
            <Feather name="heart" color={liked ? "red" : "black"} size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartButton}>
            <Text style={styles.cartText}>Add To Cart</Text>
            <Feather name="chevron-left" color="white" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerScroll: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 16 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },
  backButton: {
    marginBottom: 20,
    backgroundColor: "#F7F7F9",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  icon: { color: "black" },
  shopTitle: { fontSize: 18, fontWeight: "bold" },
  mainImage: {
    width: 300,
    height: 150,
    // resizeMode: "contain",
    // alignSelf: "center",
  },
  smallImage: { width: 60, height: 60, margin: 5, borderRadius: 8 },
  productName: { fontSize: 29, fontWeight: "bold", marginTop: 25 },
  category: { fontSize: 16, color: "gray" },
  price: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  description: { fontSize: 14, color: "gray" },
  readMore: { color: "blue" },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  cartButton: {
    backgroundColor: "#007bff",
    flexDirection: "row",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  cartText: { color: "white", fontWeight: "bold", marginRight: 10 },
  carouselContainer: {
    marginTop: 30,
    height: 100,
    width: 500,
  },
  containteBag: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#F7F7F9",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductDetail;
