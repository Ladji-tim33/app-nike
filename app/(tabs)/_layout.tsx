import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { TabBar } from "@/components/tabBar";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="accueil"
        options={{
          headerShown: false,
          title: "",
        }}
      />

      <Tabs.Screen
        name="favourite"
        options={{
          headerShown: false,
          title: "",
        }}
      />
      <Tabs.Screen
        name="myCart"
        options={{
          headerShown: false,
          title: "",
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          headerShown: false,
          title: "",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "",
          tabBarStyle: { display: "none" },
        }}
      />
    </Tabs>
  );
}
