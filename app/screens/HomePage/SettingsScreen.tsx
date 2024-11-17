import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const SettingsScreen: React.FC = () => {
  return (
    <View style={{ height: '100%', backgroundColor: '#f7fafc' }}>
      <Stack.Screen
        options={{
          title: 'Settings',
          headerStyle: { backgroundColor: '#68C9D8' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View style={{ alignItems: 'center', marginBottom: 24 }}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={{
              width: 96,
              height: 96,
              borderRadius: 48,
              marginBottom: 16,
            }}
          />
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>John Doe</Text>
          <Text style={{ color: '#718096' }}>johndoe@example.com</Text>
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
            Account Settings
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Personal Information</Text>
            <Ionicons name='chevron-forward' size={24} color='gray' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Change Password</Text>
            <Ionicons name='chevron-forward' size={24} color='gray' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Security</Text>
            <Ionicons name='chevron-forward' size={24} color='gray' />
          </TouchableOpacity>
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
            Preferences
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Notifications</Text>
            <Ionicons name='chevron-forward' size={24} color='gray' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Language</Text>
            <Ionicons name='chevron-forward' size={24} color='gray' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Privacy</Text>
            <Ionicons name='chevron-forward' size={24} color='gray' />
          </TouchableOpacity>
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
            Support
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Help Center</Text>
            <Ionicons name='chevron-forward' size={24} color='gray' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Contact Us</Text>
            <Ionicons name='chevron-forward' size={24} color='gray' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Feedback</Text>
            <Ionicons name='chevron-forward' size={24} color='gray' />
          </TouchableOpacity>
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
            Legal
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Terms of Service</Text>
            <Ionicons name='chevron-forward' size={24} color='gray' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Privacy Policy</Text>
            <Ionicons name='chevron-forward' size={24} color='gray' />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={[styles.button, styles.logoutButton]}>
          <Text style={[styles.buttonText, { color: 'white' }]}>Logout</Text>
          <Ionicons name='log-out-outline' size={24} color='white' />
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = {
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    marginBottom: 8,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
  },
  logoutButton: {
    alignSelf: 'center',
    width: '50%',
    backgroundColor: '#e53e3e',
    marginTop: 16,
    marginBottom: 32,
  },
}

export default SettingsScreen
