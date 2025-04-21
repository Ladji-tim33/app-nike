import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

const OtpVerife = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.replace("/login")}
      >
        <Feather name="chevron-left" size={24} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>Otp Verification</Text>
      <Text style={styles.subtitle}>Please Check Your Email To See The</Text>
      <Text style={styles.subtitle}>Verification Code</Text>
      <Text style={styles.inoutTexte}>OTP Code</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="0"
          style={styles.input}
          keyboardType="numeric"
          maxLength={2}
        />
        <TextInput
          placeholder="9"
          style={styles.input}
          keyboardType="numeric"
          maxLength={2}
        />
        <TextInput
          placeholder="7"
          style={styles.input}
          keyboardType="numeric"
          maxLength={2}
        />
        <TextInput
          placeholder="4"
          style={styles.input}
          keyboardType="numeric"
          maxLength={2}
        />
      </View>

      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => router.replace("/accueil")}
      >
        <Text style={styles.signInText}>Verify</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resendButton}>
        <Text style={styles.resendText}>Resend Code To</Text>
        <Text style={styles.resendText}>00:30</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpVerife;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 24,
    paddingTop: 50,
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
  icon: {
    color: "#9CA3AF",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    // marginTop: 10,
  },
  inputContainer: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    borderWidth: 1,
    borderColor: "#F7F7F9",
    width: "18%",
    height: 50,
    borderRadius: 10,
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    backgroundColor: "#F7F7F9",
  },
  inoutTexte: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 5,
  },
  signInButton: {
    backgroundColor: "#0D6EFD",
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 16,
    marginTop: 40,
  },
  signInText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },

  resendButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  resendText: {
    fontSize: 12,
    color: "#6B7280",
  },
});
