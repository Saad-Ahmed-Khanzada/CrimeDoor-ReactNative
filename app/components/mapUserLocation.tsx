import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { View, Text, Button } from "react-native";
// import * as Location from "expo-location";

export default function App() {
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // const userLocation = async () => {
  //   let { status } = await Location.requestForegroundPermissionsAsync();
  //   if (status !== "granted") {
  //     setErrorMsg("Permission to access location was denied");
  //     return;
  //   }
  //   let location = await Location.getCurrentPositionAsync({
  //     enableHighAccuracy: true,
  //   });
  //   setMapRegion({
  //     latitude: location.coords.latitude,
  //     longitude: location.coords.longitude,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421,
  //   });
  //   console.log(location.coords.latitude, location.coords.longitude);
  // };
  // useEffect(() => {
  //   userLocation();
  // }, []);

  return (
    <View className="flex flex-col items-center bg-red-200 h-screen">
      <Text className="text-3xl mt-10">This is the map</Text>

      <MapView className="w-11/12 h-1/2 mt-5" region={mapRegion}>
        <Marker coordinate={mapRegion} title={"Marker "} />
      </MapView>
      {/* <Button title="Get Location" onPress={userLocation} /> */}
    </View>
  );
}
