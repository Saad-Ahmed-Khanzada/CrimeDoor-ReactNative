import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Stack } from "expo-router";

const trendingData = [
  {
    image: require("../../../../assets/images/indexPage/aiDetective.png"),
    text: "Scientists Discover New Exoplanet in the Habitable Zone",
    time: "10 mins ago",
  },
  {
    image: require("../../../../assets/images/indexPage/aiDetective.png"),
    text: "Breakthrough in Quantum Computing Achieved",
    time: "20 mins ago",
  },
  {
    image: require("../../../../assets/images/indexPage/aiDetective.png"),
    text: "Major Advances in Renewable Energy Technologies",
    time: "30 mins ago",
  },
  {
    image: require("../../../../assets/images/indexPage/aiDetective.png"),
    text: "Scientists Discover New Exoplanet in the Habitable Zone",
    time: "10 mins ago",
  },
  {
    image: require("../../../../assets/images/indexPage/aiDetective.png"),
    text: "Major Advances in Renewable Energy Technologies",
    time: "30 mins ago",
  },
];

export default function TrendingNewsScreen() {
  return (
    <View className="flex-1 bg-white">
      <Stack.Screen
        options={{
          title: "Trending News",
          headerStyle: { backgroundColor: "#68C9D8" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      />
      <ScrollView className="p-4">
        <Text className="text-3xl font-bold mb-4">Trending News</Text>
        {trendingData.map((trend, index) => (
          <View
            key={index}
            className="flex-row items-center bg-gray-200 my-4 p-4 rounded-lg"
          >
            <Image source={trend.image} className="h-24 w-24 rounded-lg" />
            <View className="ml-4 flex-1">
              <Text className="text-lg font-bold">{trend.text}</Text>
              <Text className="text-gray-500 mt-1">{trend.time}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
