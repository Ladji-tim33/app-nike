import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

const CheckoutPage = () => {
  return (
    <ScrollView style={styles.containerScroll}>
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
        {/* Contact Information Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contact Information</Text>

            <View style={styles.infoRow}>
              <View style={styles.display}>
                <View style={styles.infoMail}>
                  <Feather name="mail" size={16} color="black" />
                </View>
                <View>
                  <Text style={styles.infoLabel}>
                    emmanueloyiboke@gmail.com
                  </Text>
                  <Text style={styles.infoType}>Email</Text>
                </View>
              </View>
              <View>
                <Feather name="edit-3" size={20} color="black" />
              </View>
            </View>

            <View style={styles.infoRow}>
              <View style={styles.display}>
                <View style={styles.infoMail}>
                  <Feather name="phone" size={16} color="black" />
                </View>
                <View>
                  <Text style={styles.infoLabel}>+234-811-732-5298</Text>
                  <Text style={styles.infoType}>Phone</Text>
                </View>
              </View>
              <View>
                <Feather name="edit-3" size={20} color="black" />
              </View>
            </View>

            <View style={styles.info}>
              <Text style={styles.infoLabel}>Address</Text>
              <View style={styles.infoDisplay}>
                <Text style={styles.infoType}>1082 Airport Road, Nigeria</Text>
                <Feather name="chevron-down" size={20} color="black" />
              </View>
            </View>

            <TouchableOpacity style={styles.mapLink}>
              <Text style={styles.linkText}>View Map</Text>
            </TouchableOpacity>

            <Text style={styles.smallText}>Volagoria</Text>
          </View>

          {/* Payment Method Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Payment Method</Text>

            <View style={styles.infoRow}>
              <View style={styles.display}>
                <Image
                  source={require("@/assets/images/image55.png")}
                  style={styles.mainImage}
                />
                <View>
                  <Text style={styles.infoLabel}>Dbl. Card</Text>
                  <Text style={styles.infoType}>**** **** 0696 4629</Text>
                </View>
              </View>
              <Feather name="chevron-down" size={20} color="black" />
            </View>

            <View style={styles.infoRow}></View>
          </View>
        </View>
      </View>
      {/* Order Summary Section */}
      <View>
        <View style={styles.summary}>
          <View style={styles.summaryContent}>
            <Text style={styles.summaryText}>Subtotal</Text>
            <Text style={styles.price}>$57898</Text>
          </View>
          <View style={styles.summaryContent}>
            <Text style={styles.summaryText}>Delivery</Text>
            <Text style={styles.price}>$60.2</Text>
          </View>
          <View style={styles.totalContent}>
            <Text style={styles.totalText}>Total Cost</Text>
            <Text style={styles.totalPrice}>$57958.2</Text>
          </View>
          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={() => router.replace("/chekoutPage")}
          >
            <Text style={styles.checkoutText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerScroll: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    paddingBottom: 50,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 50,
    // paddingBottom: 50,
  },
  header: {
    position: "relative",
    marginBottom: 20,
    alignItems: "center",
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
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  sectionContainer: {
    marginTop: 20,
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
  },
  section: {
    marginBottom: 25,

    paddingBottom: 15,
  },
  display: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  infoMail: {
    backgroundColor: "#F7F7F7",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 10,
  },

  sectionTitle: {
    fontSize: 18,
    marginBottom: 15,
    color: "#333",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    gap: 5,
    marginTop: 10,
  },
  infoLabel: {
    fontSize: 16,
    color: "#333",
  },
  infoType: {
    fontSize: 14,
    color: "#707B81",
  },
  info: {
    marginTop: 10,
  },
  infoDisplay: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainImage: {
    width: 50,
    height: 30,
    // resizeMode: "contain",
    // alignSelf: "center",
  },
  mapLink: {
    marginTop: 5,
    marginBottom: 5,
  },
  linkText: {
    color: "#0066cc",
    fontSize: 16,
  },
  summary: {
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
});

export default CheckoutPage;
