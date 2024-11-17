import React, { useRef, useEffect } from "react";
import {
  Animated,
  Easing,
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Stack, Link } from "expo-router";

export default function Welcome() {
  const slideAnim = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Stack.Screen
        options={{
          title: "Welcome Screen",
          headerStyle: { backgroundColor: "#68C9D8" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      />
      <Animated.Text
        className="text-4xl font-bold text-cyan-400 mb-0"
        style={{ transform: [{ translateX: slideAnim }] }}
      >
        Welcome Screen
      </Animated.Text>
      <Image
        source={require("../assets/images/gangster.png")}
        style={{ width: 200, height: 300 }}
      />
      <Link
        href="/details"
        // href={{ pathname: "/details" }}
        className="mt-2 bg-cyan-200 p-4 rounded-2xl"
      >
        Go to Details Page
      </Link>
    </View>
  );
}
