import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import { Stack } from "expo-router";
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

interface Item {
  id: string;
  title: string;
  description: string;
  image: string;
}

const ItemsList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, "sex-offenders"));
        const itemsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Item[];
        setItems(itemsData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }: { item: Item }) => (
    <View
      key={item.id}
      className="bg-white p-4 m-2 rounded-lg shadow-md flex flex-col justify-center items-center"
    >
      <Image
        source={{ uri: item.image }}
        className="w-full h-48 rounded-md mb-4"
      />
      <Text className="text-xl font-bold mb-2">{item.title}</Text>
      <Text className="text-gray-700">{item.description}</Text>
    </View>
  );

  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-500">{error}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-100">
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
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
};

export default ItemsList;
