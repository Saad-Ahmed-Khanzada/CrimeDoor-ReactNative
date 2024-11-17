import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native'
import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const aiDetectiveScreen: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>(
    []
  )
  const [input, setInput] = useState('')

  const handleSendMessage = () => {
    if (input.trim() === '') return

    setMessages([...messages, { text: input, sender: 'user' }])
    setInput('')

    // Simulate bot response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'This is a bot response.', sender: 'bot' },
      ])
    }, 1000)
  }

  return (
    <View className='h-full flex flex-col justify-between items-center p-4 bg-gray-100'>
      <Stack.Screen
        options={{
          title: 'AI Detective Screen',
          headerStyle: { backgroundColor: '#68C9D8' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />
      <ScrollView
        className='w-full flex-1 mb-4'
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.bubble,
              message.sender === 'user' ? styles.userBubble : styles.botBubble,
            ]}
          >
            <Text
              style={
                message.sender === 'user' ? styles.userText : styles.botText
              }
            >
              {message.text}
            </Text>
            <View
              style={
                message.sender === 'user'
                  ? styles.userBubbleTail
                  : styles.botBubbleTail
              }
            />
          </View>
        ))}
      </ScrollView>
      <View className='w-full flex flex-row items-center mb-4'>
        <TextInput
          className='flex-1 p-2 bg-white border border-cyan-300 rounded-lg'
          value={input}
          onChangeText={setInput}
          placeholder='Type a message'
        />
        <TouchableOpacity
          className='ml-2 p-2 bg-cyan-400 rounded-lg'
          onPress={handleSendMessage}
        >
          <Ionicons name='send' size={24} color='white' />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bubble: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: '80%',
    position: 'relative',
  },
  userBubble: {
    backgroundColor: '#3b82f6',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 0,
  },
  botBubble: {
    backgroundColor: '#e5e7eb',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 0,
  },
  userText: {
    color: 'white',
  },
  botText: {
    color: 'black',
  },
  userBubbleTail: {
    position: 'absolute',
    right: -10,
    bottom: 0,
    width: 0,
    height: 0,
    borderTopWidth: 10,
    borderTopColor: '#3b82f6',
    borderLeftWidth: 10,
    borderLeftColor: 'transparent',
  },
  botBubbleTail: {
    position: 'absolute',
    left: -10,
    bottom: 0,
    width: 0,
    height: 0,
    borderTopWidth: 10,
    borderTopColor: '#e5e7eb',
    borderRightWidth: 10,
    borderRightColor: 'transparent',
  },
})

export default aiDetectiveScreen
