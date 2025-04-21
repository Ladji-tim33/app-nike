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
          onPress={() => router.replace("/profileInformation")}
        >
          <Feather name="chevron-left" size={24} />
        </TouchableOpacity>

        <Text style={styles.title}>Profil</Text>
      </View>
      <View style={styles.formProfile}>
        <View style={styles.imageProfil}>
          <Image
            source={require("@/assets/images/photoProfile.png")}
            style={styles.profileImage}
          />
        </View>
        <Text style={styles.label}>Your Name</Text>
        <TextInput style={styles.input} placeholder="Enter your name" />

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Save Now</Text>
        </TouchableOpacity>
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
    backgroundColor: "#F7F7F7",
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
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  input: {
    backgroundColor: "#F7F7F9",
    padding: 15,
    borderRadius: 5,
    marginTop: 15,
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
