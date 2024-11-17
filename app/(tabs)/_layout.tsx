import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import Home from ".";
import Explore from "./explore";
import AdvSearch from "./advSearch";
import MapTab from "./map";
import SceneScreen from "../screens/HomePage/3dScenesScreen";
import SettingsScreen from "../screens/HomePage/SettingsScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabLayout: React.FC = () => {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? "home" : "home-outline"}
              color={"cyan"}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? "folder" : "folder-outline"}
              color={"cyan"}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="3D Scenes"
        component={SceneScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? "cube" : "cube-outline"}
              color={"cyan"}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={AdvSearch}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? "search-circle" : "search-circle-outline"}
              color={"cyan"}
              size={32}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapTab}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? "location" : "location-outline"}
              color={"cyan"}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabLayout;
