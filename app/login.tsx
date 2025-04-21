import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
// import { Eye, EyeOff, Mail, Lock } from "lucide-react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { useRouter } from "expo-router";
const LoginScreen = () => {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <ScrollView style={styles.containerScroll}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.replace("/explore")}
        >
          <Feather name="chevron-left" size={24} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>Hello Again!</Text>
        <Text style={styles.subtitle}>Fill Your Details Or Continue With</Text>
        <Text style={styles.subtitle}>Social Media</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email Address</Text>
          <View style={styles.inputWrapper}>
            <TextInput placeholder="xyz@gmail.com" style={styles.input} />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="********"
              secureTextEntry={!passwordVisible}
              style={styles.input}
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? (
                <Feather name="eye" size={18} style={styles.icon} />
              ) : (
                <Feather name="eye-off" size={18} style={styles.icon} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <Text
          style={styles.recoveryText}
          onPress={() => router.push("/passeword")}
        >
          Recovery Password
        </Text>

        <TouchableOpacity style={styles.signInButton}>
          <Text
            style={styles.signInText}
            onPress={() => router.replace("/signUp")}
          >
            Sign In
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleButton}>
          <Image
            source={require("@/assets/images/google.png")}
            style={styles.googleIcon}
          />
          <Text style={styles.googleText}>Sign In With Google</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          New User?{" "}
          <Text
            style={styles.createAccountText}
            onPress={() => router.replace("/signUp")}
          >
            Create Account
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerScroll: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 24,
    paddingTop: 50,
  },
  container: {
    justifyContent: "center",
  },
  backButton: {
    marginBottom: 20,
    backgroundColor: "#F7F7F9",
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
  },
  inputContainer: {
    marginBottom: 12,
    marginTop: 20,
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
    paddingVertical: 5,
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
  recoveryText: {
    color: "#6B7280",
    fontSize: 14,
    textAlign: "right",
    marginBottom: 24,
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
  googleButton: {
    borderWidth: 1,
    borderColor: "#F7F7F9",
    paddingVertical: 12,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 54,
    backgroundColor: "#F7F7F9",
  },
  googleIcon: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  googleText: {
    color: "#374151",
    fontWeight: "600",
  },
  footerText: {
    textAlign: "center",
    color: "#6B7280",
  },
  createAccountText: {
    color: "#3B82F6",
    fontWeight: "bold",
  },
});

export default LoginScreen;
