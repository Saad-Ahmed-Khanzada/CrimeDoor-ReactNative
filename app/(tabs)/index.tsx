import React from "react";
import { Link, Stack } from "expo-router";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  ScrollView,
} from "react-native";
import Icon1 from "react-native-vector-icons/Ionicons";

interface Section {
  title: string;
  uri: any;
  pathname: string;
}

const sections: Section[] = [
  {
    title: "AI Detective",
    uri: require("../../assets/images/indexPage/aiDetective.png"),
    pathname: "/screens/HomePage/aiDetectiveScreen",
  },
  {
    title: "3D Scenes",
    uri: require("../../assets/images/indexPage/3dScene.png"),
    pathname: "/screens/HomePage/3dScenesScreen",
  },
  {
    title: "News",
    uri: require("../../assets/images/indexPage/newsImage.png"),
    pathname: "/screens/HomePage/newsScreen",
  },
  {
    title: "Case Library",
    uri: require("../../assets/images/indexPage/caseLibrary.png"),
    pathname: "/screens/HomePage/libraryScreen",
  },
];

const Home: React.FC = () => {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="bg-cyan-300 rounded-b-[50px]">
        <View className="mb-4 mt-8 p-4">
          <View className="flex-row justify-between items-center mb-8">
            <Text className="text-xl font-bold">CrimeDoor</Text>
            <Link href="/screens/HomePage/SettingsScreen">
              <Icon1 name="settings" size={34} color="white" />
            </Link>
          </View>
          <TextInput
            placeholder="Search..."
            className="bg-white p-2 rounded-full border border-gray-300"
          />
        </View>
      </View>

      <View className="flex-1 justify-between p-4">
        {sections.map((section, index) => (
          <View key={index} className="bg-gray-200 rounded-2xl mb-4">
            <Link
              href={section.pathname}
              className="text-center font-bold rounded-t-2xl mb-0 py-2 text-white bg-cyan-300"
            >
              {section.title}
            </Link>
            <ImageBackground
              source={section.uri}
              className="h-36 rounded-b-2xl overflow-hidden"
            >
              <View className="flex-1" />
            </ImageBackground>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;
