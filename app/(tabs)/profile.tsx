import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
const SideMenuScreen = () => {
  const router = useRouter();

  return (
    <ScrollView style={styles.containerScroll}>
      <View style={styles.container}>
        <View style={styles.navig}>
          <Image
            source={require("@/assets/images/photoProfile.png")}
            style={styles.profileImage}
          />

          <Text style={styles.name}>Emmanuel Oyiboke</Text>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push("/profileInformation")}
          >
            <Ionicons name="person-outline" size={24} color="white" />
            <Text style={styles.menuText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="bag-outline" size={24} color="white" />

            <Text style={styles.menuText}>My Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="heart-outline" size={24} color="white" />
            <Text style={styles.menuText}>Favorit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <MaterialCommunityIcons
              name="bus-double-decker"
              size={24}
              color="white"
            />
            <Text style={styles.menuText}>Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="notifications-outline" size={24} color="white" />

            <Text style={styles.menuText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="settings-outline" size={24} color="white" />
            <Text style={styles.menuText}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logoutButton}>
            <Ionicons name="log-out-outline" size={24} color="white" />

            <Text style={styles.logoutText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={require("@/assets/images/Home1.png")}
            style={styles.imageRight}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerScroll: {
    flex: 1,
    backgroundColor: "#007BFF",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
  navig: {
    padding: 5,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 40,
    marginBottom: 10,
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    padding: 10,
  },
  menuItem: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    padding: 10,
    width: "100%",
  },
  menuText: {
    fontSize: 14,
    color: "#fff",
  },
  logoutButton: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    marginTop: 20,
    paddingTop: 15,
    borderTopWidth: 1,
    marginLeft: 10,
    borderColor: "white",
    width: "200%",
  },
  logoutText: {
    color: "#fff",
    fontSize: 14,
  },

  imageRight: {
    height: "107%",
  },
});

export default SideMenuScreen;
