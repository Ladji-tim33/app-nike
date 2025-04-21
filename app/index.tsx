import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/explore");
    }, 2000);

    return () => clearTimeout(timer);
  });
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/lognike.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#0D6EFD",
    alignItems: "center",
  },
});
