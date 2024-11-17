import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { Link, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
// import ItemsList from "@/app/components/ItemsList";
const SceneScreen: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  const sectionsData = [
    {
      title: "Crime Scene Title 1",
      description: "This is a description text about the first crime scene.",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      title: "Crime Scene Title 2",
      description: "This is a description text about the second crime scene.",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      title: "Crime Scene Title 3",
      description: "This is a description text about the third crime scene.",
      imageUrl: "https://via.placeholder.com/300x200",
    },
  ];

  // const handleToggleExpand = (index: number) => {
  //   if (expandedSections.includes(index)) {
  //     setExpandedSections(
  //       expandedSections.filter((sectionIndex) => sectionIndex !== index)
  //     )
  //   } else {
  //     setExpandedSections([...expandedSections, index])
  //   }
  // }

  return (
    <View className="h-full bg-gray-100 mt-12 mb-10">
      <Stack.Screen
        options={{
          title: "Crime Scenes",
          headerStyle: { backgroundColor: "#68C9D8" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      />
      {/* <View className="bg-red-600 z-10">
        <ItemsList />
      </View> */}
      <ScrollView className="p-4">
        {sectionsData.map((data, index) => (
          <View key={index} className="mb-6 p-4 bg-white rounded-lg shadow-lg">
            <Image
              source={{ uri: data.imageUrl }}
              className="w-full h-52 rounded-lg mb-4"
            />
            <Text className="text-2xl font-bold mb-2 text-center">
              {data.title}
            </Text>
            <TouchableOpacity className="self-center bg-cyan-500 p-2 px-4 rounded-lg mb-4 shadow">
              <Link href="/screens/CrimeScenes/ItemsList">
                <Text className="text-white text-lg">Start AR</Text>
              </Link>
            </TouchableOpacity>
            <Text className="text-gray-600 text-center mb-4 px-4">
              {data.description}
            </Text>

            {expandedSections.includes(index) && (
              <View className="mt-4">
                <TouchableOpacity className="self-center bg-cyan-500 p-2 px-4 rounded-lg shadow">
                  <Text className="text-white text-lg items-center">
                    Learn More
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SceneScreen;
