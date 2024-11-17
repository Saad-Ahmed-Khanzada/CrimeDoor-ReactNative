import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const ExpandableSection: React.FC<{
  title: string
  description: string
  imageUrl: string
  sections: string[]
}> = ({ title, description, imageUrl, sections }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <View className='mb-6 p-4 bg-white rounded-lg shadow'>
      <Image
        source={{ uri: imageUrl }}
        className='w-full h-52 rounded-lg mb-4'
      />
      <Text className='text-2xl font-bold mb-2'>{title}</Text>
      <TouchableOpacity className='bg-cyan-500 p-3 rounded-lg mb-4'>
        <Text className='text-white text-lg'>Start AR</Text>
      </TouchableOpacity>
      <Text className='text-gray-600 text-center mb-4 px-4'>{description}</Text>
      <TouchableOpacity
        onPress={handleToggleExpand}
        className='flex flex-row items-center justify-center'
      >
        <Text className='text-cyan-500 text-lg mr-2'>More Info</Text>
        <Ionicons
          name={isExpanded ? 'chevron-up' : 'chevron-down'}
          size={24}
          color='cyan'
        />
      </TouchableOpacity>
      {isExpanded && (
        <View className='mt-4'>
          {sections.map((section, index) => (
            <TouchableOpacity
              key={index}
              className='bg-white p-4 mb-2 rounded-lg shadow'
            >
              <Text className='text-base'>{section}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  )
}

export default ExpandableSection
