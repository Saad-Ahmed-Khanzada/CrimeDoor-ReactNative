import React, { useState, useRef } from "react";
import MapView, {
  LatLng,
  Marker,
  PROVIDER_GOOGLE,
  AnimatedRegion,
} from "react-native-maps";
import { View, Text, TextInput, Button } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

interface MapRegion {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export default function App() {
  const initialRegion: MapRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const [mapRegion, setMapRegion] = useState<MapRegion>(initialRegion);
  const [searchQuery, setSearchQuery] = useState("");
  const markerCoordinate = useRef<AnimatedRegion>(
    new AnimatedRegion({
      latitude: initialRegion.latitude,
      longitude: initialRegion.longitude,
      latitudeDelta: initialRegion.latitudeDelta,
      longitudeDelta: initialRegion.longitudeDelta,
    })
  );

  const onRegionChange = (region: MapRegion) => {
    setMapRegion(region);
    markerCoordinate.current.timing(region).start();
    console.log(region);
  };

  const handlePress = (e: { nativeEvent: { coordinate: LatLng } }) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    const newRegion: MapRegion = {
      ...mapRegion,
      latitude,
      longitude,
    };
    setMapRegion(newRegion);
    markerCoordinate.current.timing(newRegion).start();
  };

  const handleSearch = async () => {
    const apiKey = "627fff17fff44bfb922682ba82043b10";
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
        searchQuery
      )}&key=${apiKey}`
    );
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry;
      const newRegion: MapRegion = {
        ...mapRegion,
        latitude: lat,
        longitude: lng,
      };
      setMapRegion(newRegion);
      markerCoordinate.current.timing(newRegion).start();
    } else {
      alert("Location not found!");
    }
  };

  return (
    <View className="flex flex-col items-center bg-cyan-200 h-screen">
      <Text className="text-3xl mt-10">This is the map</Text>

      {/* Search bar */}
      <View className="w-full px-4 mb-0 flex flex-row items-center">
        <TextInput
          className="border border-gray-300 bg-white px-4 py-2 flex-1 rounded-full relative "
          placeholder="Search for a city or country"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <View className="absolute right-7">
          <Icon name="search" size={24} color={"gray"} onPress={handleSearch} />
        </View>
      </View>

      {/* Map */}
      <MapView
        className="w-11/12 h-3/4 mt-10"
        region={mapRegion}
        provider={PROVIDER_GOOGLE}
        onRegionChangeComplete={onRegionChange}
        onPress={handlePress}
      >
        <Marker.Animated
          coordinate={markerCoordinate.current}
          title={"Marker "}
        />
      </MapView>
    </View>
  );
}
