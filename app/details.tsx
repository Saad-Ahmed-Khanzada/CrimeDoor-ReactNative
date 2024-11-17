import React from "react";
import { View, Text } from "react-native";
import { Link, Stack } from "expo-router";
function details() {
  return (
    <View className="flex h-screen justify-center items-center">
      <Stack.Screen
        options={{
          title: "Detail Screen",
          headerStyle: { backgroundColor: "#68C9D8" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
          //   headerTitle: (props) => <LogoTitle {...props} />,
        }}
      />
      <Text className="text-4xl font-bold text-cyan-400 mb-5">
        Details page
      </Text>
      <Link
        href="/screens/Authentication/register"
        className="mt-8 bg-cyan-200 p-4 rounded-2xl"
      >
        Go to Register Page
      </Link>
    </View>
  );
}

export default details;
