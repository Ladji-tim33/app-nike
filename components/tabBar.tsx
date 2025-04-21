import {
  View,
  StyleSheet,
  LayoutChangeEvent,
  ImageBackground,
} from "react-native";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import TabBarBottom from "./tabBarBottom";
import { useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export function TabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarButtonProps) {
  const [dimention, setDimention] = useState({ height: 20, width: 100 });

  const buttonWidth = dimention.width / state.routes.length;

  const onTabBarLayout = (e: LayoutChangeEvent) => {
    setDimention({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };

  const tabPostionIconX = useSharedValue(0);

  const aniamtedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPostionIconX.value }],
    };
  });

  return (
    <ImageBackground
      source={require("@/assets/images/Vector1789.png")}
      style={styles.background}
    >
      <View onLayout={onTabBarLayout} style={styles.tabBar}>
        <Animated.View
          style={[
            aniamtedStyle,
            {
              position: "absolute",
              backgroundColor: "#723FEB",
              borderRadius: 30,
              bottom: 15,
              left: 15,
              marginHorizontal: 12,
              height: dimention.height - 5,
              width: buttonWidth - 25,
            },
          ]}
        />
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            tabPostionIconX.value = withSpring(buttonWidth * index, {
              duration: 1500,
            });
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TabBarBottom
              key={route.name}
              onPress={onPress}
              onLongPress={onLongPress}
              isFocused={isFocused}
              routeName={route.name}
              color={isFocused ? "#673ab7" : "#222"}
              label={label}
            />
          );
        })}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: 100,
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",
  },

  tabBar: {
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    // alignContent: "center",
    paddingVertical: 15,
    borderRadius: 35,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
});
