import React from "react";
import { Alert, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "expo-router";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";

export default function SignOutButton() {
  const navigation = useNavigation();
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      Alert.alert("Success", "Logged out successfully!");
      navigation.navigate("screens/Authentication/login");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <TouchableOpacity
      onPress={handleSignOut}
      className="bg-red-500 p-2 rounded-lg"
    >
      <Text className="text-white text-center">Sign Out</Text>
    </TouchableOpacity>
  );
}
