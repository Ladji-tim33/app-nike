import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useEffect } from "react";
import { useRouter } from "expo-router";

type ModalProps = {
  visible: boolean;
  onClose: () => void;
};

const Modale = ({ visible, onClose }: ModalProps) => {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/otpVerife");
    }, 2000);

    return () => clearTimeout(timer);
  });
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Feather name="x" size={24} color="#000" />
          </TouchableOpacity>
          <View style={styles.emailContainer}>
            <Image
              source={require("../assets/images/email1.png")}
              style={styles.emailIcon}
            />
          </View>
          <Text style={styles.title}>Check your email</Text>
          <Text style={styles.subtitle}>
            We Have Send Password Recovery Code In Your Email
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  closeButton: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  emailContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#0D6EFD",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    marginBottom: 20,
    marginTop: 15,
  },
  emailIcon: {
    width: 20,
    height: 20,
    color: "white",
    alignSelf: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#707BB1",
    textAlign: "center",
  },
});

export default Modale;
