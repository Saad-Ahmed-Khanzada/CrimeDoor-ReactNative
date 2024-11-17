import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { Stack, Link } from "expo-router";

const newsData = [
  {
    image: require("../../../../assets/images/indexPage/aiDetective.png"),
    title: "Breaking News 1",
    paragraph: "This is a summary of the breaking news 1.",
    time: "10 mins ago",
  },
  {
    image: require("../../../../assets/images/indexPage/aiDetective.png"),
    title: "Breaking News 2",
    paragraph: "This is a summary of the breaking news 2.",
    time: "20 mins ago",
  },
  {
    image: require("../../../../assets/images/indexPage/aiDetective.png"),
    title: "Breaking News 2",
    paragraph: "This is a summary of the breaking news 2.",
    time: "20 mins ago",
  },
  {
    image: require("../../../../assets/images/indexPage/aiDetective.png"),
    title: "Breaking News 2",
    paragraph: "This is a summary of the breaking news 2.",
    time: "20 mins ago",
  },
];

export default function LatestNewsScreen() {
  return (
    <View className="my-4">
      <Stack.Screen
        options={{
          title: "Latest News",
          headerStyle: { backgroundColor: "#68C9D8" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      />

      <ScrollView className="mt-4">
        {newsData.map((news, index) => (
          <View key={index} className="bg-gray-200 m-4 p-4 rounded-lg">
            <Image source={news.image} className="h-40 w-full rounded-lg" />
            <Text className="text-xl font-bold mt-2">{news.title}</Text>
            <Text className="text-gray-700 mt-1">{news.paragraph}</Text>
            <View className="flex flex-row justify-between items-center mt-2">
              <Text className="text-cyan-400 font-bold">Breaking News</Text>
              <Text className="text-gray-500">{news.time}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
