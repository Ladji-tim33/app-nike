import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
};

type OnboardingScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "WELCOME TO ",
    soutitre: "NIKE",
    image: require("@/assets/images/image3.png"),
    vector1: require("@/assets/images/Vector1.png"),
    vector2: require("@/assets/images/Vector2.png"),
    vector3: require("@/assets/images/Highlight_05.png"),

    buttonLabel: "Get Started",
    layout: "titleFirst",
  },
  {
    id: "2",
    title: "Let's Start Journey",
    soutitre: "With Nike",
    paragraph1: "Smart, Gorgeous & Fashionable",
    paragraph2: "Collection Explor Now",
    image: require("@/assets/images/Spring_prev_ui.png"),
    vector2: require("@/assets/images/Vector2.png"),
    vector4: require("@/assets/images/vector4.png"),
    vector5: require("@/assets/images/Misc_04.png"),
    buttonLabel: "Next",
    layout: "imageFirst",
  },
  {
    id: "3",
    title: "You Have The ",
    soutitre: "Power To",
    paragraph1: "There Are Many Beautiful And Attractive Plants To Your Room",
    paragraph2: "Plants To Your Room",
    image: require("@/assets/images/Aire-Jordan-Nike.png"),
    vector2: require("@/assets/images/Vector2.png"),
    vector6: require("@/assets/images/Misc_04.png"),
    buttonLabel: "Next",
    layout: "imageFirst",
  },
];

export default function OnboardingScreen({
  navigation,
}: OnboardingScreenProps) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    } else {
      router.replace("/login");
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            {item.layout === "titleFirst" ? (
              <>
                <Text
                  style={styles.title}
                  onPress={() => router.replace("/myCart")}
                >
                  {item.title}
                </Text>
                <Text style={styles.sousTitle}>{item.soutitre}</Text>
                <Image source={item.vector1} style={styles.vector} />
                <Image source={item.vector2} style={styles.vectorNike} />
                <Image source={item.vector3} style={styles.vector3} />
                <Image source={item.image} style={styles.image} />
              </>
            ) : (
              <>
                <Image source={item.image} style={styles.image2} />
                <Text style={styles.title2}>{item.title}</Text>
                <Text style={styles.sousTitle}>{item.soutitre}</Text>
                <Image source={item.vector2} style={styles.vectorNike} />
                <Image source={item.vector4} style={styles.vecto4} />
                <Image source={item.vector5} style={styles.vecto5} />
                <Image source={item.vector6} style={styles.vecto4} />
                <Text style={styles.parag}>{item.paragraph1}</Text>
                <Text style={styles.parag}>{item.paragraph2}</Text>
              </>
            )}
          </View>
        )}
      />
      {/* Indicateurs de page */}
      <View style={styles.dotContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
          />
        ))}
      </View>

      {/* Bouton Next */}
      <TouchableOpacity onPress={handleNext} style={styles.button}>
        <Text style={styles.buttonText}>
          {slides[currentIndex].buttonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D6EFD",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.9,
  },
  slide: {
    width: width,
    height: height,
    alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 550,
    resizeMode: "contain",
    // marginTop: 50,
    position: "absolute",
    top: 65,
    // right: -540,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF",
    marginTop: 130,
    textAlign: "center",
  },

  title2: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF",
    marginTop: 10,
    textAlign: "center",
  },

  parag: {
    fontSize: 12,
    fontWeight: "medium",
    color: "#FFF",
    marginTop: 5,
    textAlign: "center",
  },

  sousTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
  },

  vector: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    position: "absolute",
    top: 180,
    marginTop: 2,
  },

  vector3: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    position: "absolute",
    top: 122,
    left: 60,
    // marginTop: 2,
  },

  vecto4: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    position: "absolute",
    top: 100,
    left: 20,
    // marginTop: 2,
  },

  vecto5: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    position: "absolute",
    top: 100,
    right: 30,
    // marginTop: 2,
  },

  image2: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginTop: 80,
  },
  vectorNike: {
    resizeMode: "contain",
    position: "absolute",
    bottom: 200,
    // marginTop: 2,
  },

  dotContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 170,
  },
  dot: {
    width: 25,
    height: 5,
    borderRadius: 5,
    backgroundColor: "orange",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#FFF",
    width: 35,
  },
  button: {
    position: "absolute",
    bottom: 40,
    width: "80%",
    backgroundColor: "#FFF",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#2B2B2B",
    fontSize: 14,
    fontWeight: "bold",
  },
});
