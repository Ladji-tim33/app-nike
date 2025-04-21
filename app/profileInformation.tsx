import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.replace("/profile")}
        >
          <Feather name="chevron-left" size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
        <Text
          style={styles.done}
          onPress={() => router.replace("/profileScreen")}
        >
          Done
        </Text>
      </View>
      <View style={styles.formProfile}>
        <View style={styles.imageProfil}>
          <Image
            source={require("@/assets/images/photoProfile.png")}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Emmanuel Oyiboke</Text>
          <Text style={styles.change}>Change profile picture</Text>
        </View>
        <View>
          <Text style={styles.label}>First Name</Text>
          <View style={styles.input}>
            <Text>Ladji</Text>
            <Feather name="check" color="blue" size={20} />
          </View>
        </View>
        <View>
          <Text style={styles.label}>Last Name</Text>
          <View style={styles.input}>
            <Text>Timer</Text>
            <Feather name="check" color="blue" size={20} />
          </View>
        </View>
        <View>
          <Text style={styles.label}>Location</Text>
          <View style={styles.input}>
            <Text>Dakar</Text>
            <Feather name="check" color="blue" size={20} />
          </View>
        </View>
        <View>
          <Text style={styles.label}>Mobile phone</Text>
          <View style={styles.input}>
            <Text>788848</Text>
            <Feather name="check" color="blue" size={20} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    // paddingHorizontal: 20,
    paddingTop: 50,
  },
  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: { fontSize: 24, fontWeight: "bold" },
  backButton: {
    backgroundColor: "#F7F7F7",
    borderRadius: 100,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  done: {
    fontSize: 16,
    textAlign: "center",
    color: "#007BFF",
  },
  formProfile: {
    paddingHorizontal: 20,
  },
  imageProfil: {
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    // color: "#fff",
  },

  change: {
    fontSize: 16,
    color: "#007BFF",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  input: {
    backgroundColor: "#F7F7F9",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    borderRadius: 15,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginTop: 35,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
