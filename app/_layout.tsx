import React from 'react'
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-reanimated'
import { View, Text, Settings } from 'react-native'
import { useColorScheme } from '@/hooks/useColorScheme'
import SettingsScreen from './screens/HomePage/SettingsScreen'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function Layout() {
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    // <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name='index' />
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen name='+not-found' />
      <Stack.Screen name='screens/HomePage/SettingsScreen' />
    </Stack>
    // </ThemeProvider>
  )
}
