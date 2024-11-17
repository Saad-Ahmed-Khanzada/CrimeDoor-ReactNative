import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { Stack, Link } from "expo-router";

const newsData = [
  {
    image: require("../../../assets/images/indexPage/aiDetective.png"),
    title: "Breaking News 1",
    paragraph: "This is a summary of the breaking news 1.",
    time: "10 mins ago",
  },
  {
    image: require("../../../assets/images/indexPage/aiDetective.png"),
    title: "Breaking News 2",
    paragraph: "This is a summary of the breaking news 2.",
    time: "20 mins ago",
  },
];

const trendingData = [
  {
    image: require("../../../assets/images/indexPage/aiDetective.png"),
    text: "Trending News 1",
    time: "5 mins ago",
  },
  {
    image: require("../../../assets/images/indexPage/aiDetective.png"),
    text: "Trending News 2",
    time: "15 mins ago",
  },
  {
    image: require("../../../assets/images/indexPage/aiDetective.png"),
    text: "Trending News 3",
    time: "15 mins ago",
  },
];

const mysteriousDeathsData = [
  {
    image: require("../../../assets/images/indexPage/aiDetective.png"),
    title: "Elisa Lam",
    paragraph: "Student Found Dead in L.A’s Cecil Hotel Water Tank",
  },
  {
    image: require("../../../assets/images/indexPage/aiDetective.png"),
    title: "Emma Adam",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
// const missingData = [
//   {
//     image: require("../../../assets/images/indexPage/aiDetective.png"),
//     title: "Elisa Lam",
//     paragraph: "Student Found Dead in L.A’s Cecil Hotel Water Tank",
//   },
//   {
//     image: require("../../../assets/images/indexPage/aiDetective.png"),
//     title: "Emma Adam",
//     paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
// ];
// const murderData = [
//   {
//     image: require("../../../assets/images/indexPage/aiDetective.png"),
//     title: "Elisa Lam",
//     paragraph: "Student Found Dead in L.A’s Cecil Hotel Water Tank",
//   },
//   {
//     image: require("../../../assets/images/indexPage/aiDetective.png"),
//     title: "Emma Adam",
//     paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
// ];

function NewsScreen() {
  return (
    <ScrollView className="bg-white">
      <Stack.Screen
        options={{
          title: "News Screen",
          headerStyle: { backgroundColor: "#68C9D8" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      />

      {/* Section 1: Latest News */}
      <View className="my-4">
        <View className="flex-row justify-between items-center px-4">
          <Text className="text-2xl font-bold ">Latest News</Text>
          <Link
            href={{ pathname: "/screens/HomePage/InnerPages/latestNewsScreen" }}
            className="text-md font-bold text-cyan-400 bg-cyan-50 px-2 py-1 rounded-full border-2 border-cyan-400"
          >
            View All
          </Link>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4"
        >
          {newsData.map((news, index) => (
            <View key={index} className="bg-gray-200 m-2 p-4 rounded-lg w-72">
              <Image source={news.image} className="h-40 w-full rounded-lg" />
              <Text className="text-xl font-bold mt-2">{news.title}</Text>
              <Text className="text-gray-700 mt-1">{news.paragraph}</Text>
              <View className="flex flex-row justify-between items-center">
                <Text className="text-cyan-400 font-bold mt-1 flex justify-between item">
                  Breaking News
                </Text>
                <Text className="text-gray-500 ">{news.time}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Section 2: Trending News */}
      <View className="my-4 px-4">
        <View className="flex-row justify-between items-center px-0">
          <Text className="text-2xl font-bold ">Trending News</Text>
          <Link
            href={{
              pathname: "/screens/HomePage/InnerPages/trendingNewsScreen",
            }}
            className="text-md font-bold text-cyan-400 bg-cyan-50 px-2 py-1 rounded-full border-2 border-cyan-400"
          >
            View All
          </Link>
        </View>
        {trendingData.map((trend, index) => (
          <View
            key={index}
            className="flex-row items-center bg-gray-200 my-2 p-2 rounded-lg"
          >
            <Image source={trend.image} className="h-16 w-16 rounded-lg" />
            <View className="ml-4 flex-1">
              <Text className="text-lg font-bold">{trend.text}</Text>
              <Text className="text-gray-500">{trend.time}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Section 3: Mysterious Deaths */}
      <View className="my-4">
        <Text className="text-2xl font-bold px-4">Mysterious Deaths</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4"
        >
          {mysteriousDeathsData.map((death, index) => (
            <View key={index} className="bg-gray-200 m-2 p-4 rounded-lg w-72">
              <Image source={death.image} className="h-40 w-full rounded-lg" />
              <Text className="text-xl font-bold mt-2">{death.title}</Text>
              <Text className="text-gray-700 mt-1">{death.paragraph}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Section 4: Missing Persons */}
      <View className="my-4">
        <Text className="text-2xl font-bold px-4">Missing Persons</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4"
        >
          {mysteriousDeathsData.map((person, index) => (
            <View key={index} className="bg-gray-200 m-2 p-4 rounded-lg w-72">
              <Image source={person.image} className="h-40 w-full rounded-lg" />
              <Text className="text-xl font-bold mt-2">{person.title}</Text>
              <Text className="text-gray-700 mt-1">{person.paragraph}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Section 5: Murders */}
      <View className="my-4">
        <Text className="text-2xl font-bold px-4">Murders</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4"
        >
          {mysteriousDeathsData.map((murder, index) => (
            <View key={index} className="bg-gray-200 m-2 p-4 rounded-lg w-72">
              <Image source={murder.image} className="h-40 w-full rounded-lg" />
              <Text className="text-xl font-bold mt-2">{murder.title}</Text>
              <Text className="text-gray-700 mt-1">{murder.paragraph}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

export default NewsScreen;
