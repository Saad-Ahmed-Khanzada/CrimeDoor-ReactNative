import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Link, Stack } from "expo-router";
import { auth } from "../../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

import Icon from "react-native-vector-icons/Ionicons";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "User registered successfully!");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
    setLoading(false);
  };

  return (
    <View className="flex-1 ">
      <Stack.Screen
        options={{
          title: "Register Screen",
          headerStyle: { backgroundColor: "#68C9D8" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      />
      <LinearGradient
        colors={["#C7F8FF", "#68C9D8", "#4DC1C1", "#4DC1C1", "#C7F8FF"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        className="flex-1 justify-center items-center"
      >
        <Text className="text-4xl font-bold mb-14 text-white  ">Register</Text>
        <View className="flex flex-col">
          <Text className="text-lg font-semibold text-white">Email</Text>
          <TextInput
            className="border-2 border-white text-white rounded-lg p-4 mb-4 w-64  text-base"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View className="flex flex-col">
          <Text className="text-lg font-semibold text-white">Password</Text>
          <View className=" flex flex-row">
            <TextInput
              className="border-2 border-white rounded-lg text-white p-4 mb-4 w-64 relative text-base"
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
          onPress={handleRegister}
          disabled={loading}
          className={`mt-4  py-2 px-14 rounded-lg border-2 border-white ${
            loading ? "bg-gray-300" : "bg-cyan-300"
          }`}
        >
          <Text className="text-white text-center text-lg font-semibold">
            {loading ? "Loading..." : "Register"}
          </Text>
        </TouchableOpacity>
        {/* <Button
        title={loading ? "Loading..." : "Register"}
        onPress={handleRegister}
        disabled={loading}
      /> */}
        <Link
          href="/screens/Authentication/login"
          className="mt-16 bg-cyan-900 p-4 rounded-xl border-2 border-white font-semibold"
        >
          <Text className="text-white text-center font-semibold">
            Go to Login Screen
          </Text>
        </Link>
        {/* <Link href="/(tabs)" className="mt-8 bg-cyan-200 p-4 rounded-2xl">
        Go to Tab Layout
      </Link> */}
      </LinearGradient>
    </View>
  );
}
