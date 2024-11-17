import React from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon1 from "react-native-vector-icons/Ionicons";
import CustomTouchableOpacity from "../wrappers/customTouchableOpacity";

export default function Explore() {
  return (
    <ScrollView className="flex-1 bg-cyan-300">
      {/* Section 1: Top Navbar and Search Bar */}
      <View className="mb-0 mt-8 py-4">
        <View className="flex-row items-center">
          <Text className="text-2xl ml-4 text-white font-bold flex-grow text-center">
            Crime History
          </Text>
          <Icon1 name="person-circle" size={34} color="#DE3163" />
        </View>
      </View>

      {/* Section 2: Four Boxes in a Column with Background Images */}
      <View className="flex-1 justify-between p-4 bg-gray-50">
        <Text className="text-xl font-semibold ml-[-4] pb-4">
          Mysterious Deaths
        </Text>

        {[
          {
            title: "TITLE HERE",
            uri: require("../../assets/images/explorePage/mysteriousDeathImage.png"),
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pharetra pellentesque orci id bibendum. Phasellus consectetur consectetur sagittis....",
            date: "August 2, 2021",
          },
          {
            title: "TITLE HERE",
            uri: require("../../assets/images/explorePage/mysteriousDeathImage.png"),
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pharetra pellentesque orci id bibendum. Phasellus consectetur consectetur sagittis....",
            date: "August 2, 2021",
          },
          {
            title: "TITLE HERE",
            uri: require("../../assets/images/explorePage/mysteriousDeathImage.png"),
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pharetra pellentesque orci id bibendum. Phasellus consectetur consectetur sagittis....",
            date: "August 2, 2021",
          },
          {
            title: "TITLE HERE",
            uri: require("../../assets/images/explorePage/mysteriousDeathImage.png"),
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pharetra pellentesque orci id bibendum. Phasellus consectetur consectetur sagittis....",
            date: "August 2, 2021",
          },
        ].map((item, index) => (
          <View key={index} className="bg-gray-200 mb-4 rounded-xl">
            <ImageBackground
              source={
                typeof item.uri === "string" ? { uri: item.uri } : item.uri
              }
              className="h-48 rounded-t-xl overflow-hidden"
            >
              <View className="flex-1" />
            </ImageBackground>
            <View className="p-4">
              <Text className="text-lg font-bold mb-2">{item.title}</Text>
              <Text className="text-gray-700 mb-2">{item.description}</Text>
              <View className="border-b border-gray-300 mb-2"></View>
              <View className="flex-row justify-between items-center">
                <Text className="text-gray-600">{item.date}</Text>
                <View className="flex-row items-center">
                  <Text className="text-gray-600 mr-2">Read More</Text>
                  <CustomTouchableOpacity className="bg-cyan-300 p-2 rounded-full flex-row items-center ">
                    <Icon1 name="chevron-forward" size={16} color="#fff" />
                  </CustomTouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
