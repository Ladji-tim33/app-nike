import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: any;
}

const CartScreen = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Nike Club Max",
      price: 584.95,
      quantity: 1,
      image: require("@/assets/images/pngaaa1.png"),
    },
    {
      id: "2",
      name: "Nike Air Max 200",
      price: 94.05,
      quantity: 1,
      image: require("@/assets/images/pngaaa.png"),
    },
    {
      id: "3",
      name: "Nike Air Max 270 Essential",
      price: 74.95,
      quantity: 1,
      image: require("@/assets/images/Nike-Epic.png"),
    },
  ]);

  //  Augmenter la quantité
  const increaseQuantity = (id: string) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  //  Diminuer la quantité
  const decreaseQuantity = (id: string) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  //  Supprimer un article
  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  //  Calculer le total
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const delivery = 60.2;
  const totalCost = subtotal + delivery;

  const renderItem = ({ item }: { item: CartItem }) => (
    <Swipeable
      renderLeftActions={() => (
        <View style={styles.actionRight}>
          <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
            <Feather name="plus" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
            <Feather name="minus" size={24} color="white" />
          </TouchableOpacity>
        </View>
      )}
      renderRightActions={() => (
        <View style={styles.actionLeft}>
          <TouchableOpacity onPress={() => removeItem(item.id)}>
            <Feather
              name="trash-2"
              size={24}
              color="white"
              style={styles.deleteText}
            />
          </TouchableOpacity>
        </View>
      )}
    >
      <View style={styles.cartItem}>
        <View style={styles.imageContent}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        </View>
      </View>
    </Swipeable>
  );

  const renderFooter = () => (
    <View>
      <View style={styles.summary}>
        <View style={styles.summaryContent}>
          <Text style={styles.summaryText}>Subtotal</Text>
          <Text style={styles.price}>${subtotal.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryContent}>
          <Text style={styles.summaryText}>Delivery</Text>
          <Text style={styles.price}>${delivery.toFixed(2)}</Text>
        </View>
        <View style={styles.totalContent}>
          <Text style={styles.totalText}>Total Cost</Text>
          <Text style={styles.totalPrice}>${totalCost.toFixed(2)}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => router.replace("/chekoutPage")}
      >
        <Text style={styles.checkoutText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#F7F7F7", paddingBottom: 40 }}
    >
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.replace("/accueil")}
            >
              <Feather name="chevron-left" size={24} />
            </TouchableOpacity>

            <Text style={styles.title}>My Cart</Text>
          </View>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ListFooterComponent={renderFooter}
            contentContainerStyle={styles.listContent}
          />
        </View>
      </GestureHandlerRootView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F7",
    // paddingHorizontal: 20,
    paddingTop: 40,
    marginBottom: 100,
  },
  header: {
    position: "relative",
    marginBottom: 20,
    alignItems: "center",
    marginHorizontal: 20,
  },
  backButton: {
    position: "absolute",
    bottom: -10,
    left: 0,
    backgroundColor: "#FFF",
    borderRadius: 100,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  listContent: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  imageContent: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: "#F7F7F7",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 14,
    color: "#555",
  },
  summary: {
    marginTop: 10,
    padding: 27,
    backgroundColor: "#fff",
  },
  summaryContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  summaryText: {
    fontSize: 16,
    marginBottom: 5,
    color: "#707B81",
  },
  price: {
    fontWeight: "bold",
  },
  totalContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#707B81",
    borderStyle: "dashed",
    paddingTop: 10,
    marginTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007bff",
  },
  checkoutButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
  },
  checkoutText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  actionLeft: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 100,
    borderRadius: 10,
  },
  actionRight: {
    backgroundColor: "#0D6EFD",
    justifyContent: "space-around",
    alignItems: "center",
    width: 50,
    height: 100,
    borderRadius: 10,
  },
  actionText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  deleteText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  quantity: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10,
    color: "#FFF",
  },
});

export default CartScreen;
