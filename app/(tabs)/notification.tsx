import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { router } from "expo-router";

const notifications = [
  {
    id: 1,
    image: require("@/assets/images/pngaaa1.png"),
    message: "We Have New Products With Offers",
    time: "7 min ago",
    prix: "$345.90",
  },
  {
    id: 2,
    image: require("@/assets/images/pngaaa.png"),
    message: "Nike Air Max Discount",
    time: "40 min ago",
    prix: "$895.90",
  },
];

const notificationsYesterday = [
  {
    id: 1,
    image: require("@/assets/images/basket1.png"),
    message: "We Have New Products With Offers",
    time: "7 min ago",
    prix: "$345.90",
  },
  {
    id: 2,
    image: require("@/assets/images/basket2.png"),
    message: "Nike Air Max Discount",
    time: "40 min ago",
    prix: "$895.90",
  },
];

const NotificationsScreen = () => {
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
          <Text style={styles.title}>Notification</Text>
          <View style={styles.containteBag}>
            <Feather name="trash-2" size={24} style={styles.icon} />
          </View>
        </View>
        <Text style={styles.recent}>Recent</Text>
        {notifications.map((notif) => (
          <View key={notif.id} style={styles.notification}>
            <View style={styles.imageContent}>
              <Image source={notif.image} style={styles.image} />
            </View>
            <View>
              <Text style={styles.message}>{notif.message}</Text>
              <View style={styles.containerPrix}>
                <Text style={styles.prix}>{notif.prix}</Text>
                <Text>$897.08</Text>
              </View>
            </View>
            <Text style={styles.time}>{notif.time}</Text>
          </View>
        ))}
        <Text style={styles.recent}>Yesterday</Text>

        {notificationsYesterday.map((notif) => (
          <View key={notif.id} style={styles.notification}>
            <View style={styles.imageContent}>
              <Image source={notif.image} style={styles.image} />
            </View>
            <View>
              <Text style={styles.message}>{notif.message}</Text>
              <View style={styles.containerPrix}>
                <Text style={styles.prix}>{notif.prix}</Text>
                <Text>$897.08</Text>
              </View>
            </View>
            <Text style={styles.time}>{notif.time}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerScroll: {
    flex: 1,
    backgroundColor: "#F7F7F9",
    paddingHorizontal: 20,
  },
  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },
  container: {
    marginBottom: 100,
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
  recent: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
  },
  notification: {
    padding: 15,
    marginTop: 10,
    backgroundColor: "#FFF",
    marginVertical: 5,
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
  message: {
    fontSize: 16,
    fontWeight: "bold",
    width: 150,
  },
  containerPrix: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 7,
  },
  prix: {
    fontSize: 16,
    fontWeight: "bold",
  },
  time: {
    fontSize: 12,
    color: "#666",
  },
});

export default NotificationsScreen;
