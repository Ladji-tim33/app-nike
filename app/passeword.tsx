import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { useRouter } from "expo-router";
import Modale from "@/components/Modale";

const PasswordScreen = () => {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.replace("/login")}
      >
        <Feather name="chevron-left" size={24} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subtitle}>Enter your Email account to reset</Text>
      <Text style={styles.subtitle}>your password</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput placeholder="xxxxxxx" style={styles.input} />
        </View>
      </View>

      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.signInText}>Reset Password</Text>
      </TouchableOpacity>

      <Modale visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 24,
    paddingTop: 150,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 24,
    backgroundColor: "#f7f7f9",
    borderRadius: 100,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    color: "#6B7280",
    textAlign: "center",
    // marginBottom: 24,
  },
  inputContainer: {
    marginBottom: 16,
    marginTop: 30,
  },
  label: {
    color: "#4B5563",
    marginBottom: 8,
    marginVertical: 10,
  },
  inputWrapper: {
    borderWidth: 0,
    borderColor: "#D1D5DB",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F7F9",
  },
  input: {
    flex: 1,
  },
  icon: {
    color: "#9CA3AF",
    marginRight: 8,
  },
  signInButton: {
    backgroundColor: "#0D6EFD",
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  signInText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default PasswordScreen;
