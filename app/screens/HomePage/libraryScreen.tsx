import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Stack } from "expo-router";

const caseData = [
  {
    image: require("../../../assets/images/indexPage/caseLibrary.png"),
    title: "Case Title 1",
    paragraph: "This is a summary of case 1.",
    date: "2024-06-10",
  },
  {
    image: require("../../../assets/images/indexPage/caseLibrary.png"),
    title: "Case Title 2",
    paragraph: "This is a summary of case 2.",
    date: "2024-06-09",
  },
  {
    image: require("../../../assets/images/indexPage/caseLibrary.png"),
    title: "Case Title 3",
    paragraph: "This is a summary of case 2.",
    date: "2024-06-09",
  },
];

function SceneScreen() {
  return (
    <ScrollView>
      <Stack.Screen
        options={{
          title: "Case Files",
          headerStyle: { backgroundColor: "#68C9D8" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
          //   headerTitle: (props) => <LogoTitle {...props} />,
        }}
      />

      {caseData.map((caseItem, index) => (
        <View key={index} className="bg-gray-200 m-4 p-4 rounded-lg">
          <Image source={caseItem.image} className="h-40 w-full rounded-lg" />
          <Text className="text-xl font-bold mt-2">{caseItem.title}</Text>
          <Text className="text-gray-700 mt-1">{caseItem.paragraph}</Text>
          <Text className="text-gray-500 mt-1">{caseItem.date}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

export default SceneScreen;
