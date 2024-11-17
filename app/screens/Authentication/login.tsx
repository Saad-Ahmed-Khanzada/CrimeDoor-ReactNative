import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import { Link, Stack, useNavigation } from "expo-router"; // Import useNavigation hook
import { auth } from "../../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Icon from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const navigation = useNavigation(); // Initialize navigation hook

  const handleLogin = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "Logged in successfully!");
      // Redirect to Tabs path if login is successful
      navigation.navigate("(tabs)"); // Use navigation method to navigate to Tabs path
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
    setLoading(false);
  };

  return (
    <View className="flex-1 ">
      <LinearGradient
        colors={[
          "#00A3A3",
          "#00D1D1",
          "#5CFFFF",
          "#5CFFFF",
          "#8AFFFF",
          "#00D1D1",
          "#00A3A3",
        ]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        className="flex-1 justify-center items-center"
      >
        <Stack.Screen
          options={{
            title: "Login Screen",
            headerStyle: { backgroundColor: "#68C9D8" },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            gestureEnabled: false,
            gestureDirection: "horizontal",
            headerTitleAlign: "center",
          }}
        />
        <Text className="text-4xl font-bold mb-2 text-white">Login</Text>
        <Image
          source={require("../../../assets/images/profileIcon.png")}
          style={{ width: 200, height: 200 }}
        />
        <View className="flex flex-col">
          <Text className="text-lg font-semibold text-cyan-700">Email</Text>
          <TextInput
            className="border-2 border-white text-cyan-800 rounded-lg p-4 mb-4 w-72  text-base"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View className="flex flex-col">
          <Text className="text-lg font-semibold text-cyan-800">Password</Text>
          <View className=" flex flex-row">
            <TextInput
              className="border-2 border-white rounded-lg text-black p-4 mb-4 w-72 relative text-base"
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <Icon
              style={{ position: "absolute", right: 10, top: 20 }}
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="#ffff"
              onPress={() => setShowPassword(!showPassword)}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={handleLogin}
          disabled={loading}
          className={`mt-4  py-4 px-16 rounded-lg border-2 border-white ${
            loading ? "bg-gray-300" : "bg-cyan-300"
          }`}
        >
          <Text className="text-white text-center font-semibold font-lg">
            {loading ? "Loading..." : "Login"}
          </Text>
        </TouchableOpacity>
        <Link
          href="/screens/Authentication/register"
          className="mt-16 bg-cyan-900 p-4 rounded-xl border-2 border-white font-semibold"
        >
          <Text className="text-white text-center">Go to Register Screen</Text>
        </Link>
      </LinearGradient>
    </View>
  );
}
