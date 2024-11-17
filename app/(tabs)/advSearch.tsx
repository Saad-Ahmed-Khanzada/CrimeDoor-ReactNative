import React from 'react'
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import CustomTouchableOpacity from '../wrappers/customTouchableOpacity'

import Icon1 from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/MaterialIcons'

const AdvSearch: React.FC = () => {
  return (
    <ScrollView className='flex-1 bg-cyan-300'>
      {/* Section 1: Top Navbar */}
      <View className='mb-0 mt-8 p-4'>
        <View className='flex-row items-center'>
          <Text className='text-2xl text-white ml-4 text-center flex-grow font-bold'>
            Advanced Search
          </Text>
          <Icon1 name='person-circle' size={34} color='#DE3163' />
        </View>
      </View>

      {/* Section 2: Search Options and Input Fields */}
      <View className='flex-1 p-4 bg-gray-50 min-h-screen'>
        {/* Search Buttons */}
        <View className='mb-4'>
          <CustomTouchableOpacity className='bg-white p-2 mb-2 rounded-full flex-row justify-between items-center border border-gray-300'>
            <Text>Search by address</Text>
            <Icon2 name='location-on' size={20} color='#000' />
          </CustomTouchableOpacity>
          <CustomTouchableOpacity className='bg-white p-2 mb-2 rounded-full flex-row justify-between items-center border border-gray-300'>
            <Text>Search by full name</Text>
            <Icon2 name='person' size={20} color='#000' />
          </CustomTouchableOpacity>
          <CustomTouchableOpacity className='bg-white p-2 mb-2 rounded-full flex-row justify-between items-center border border-gray-300'>
            <Text>Search by cell number</Text>
            <Icon2 name='phone' size={20} color='#000' />
          </CustomTouchableOpacity>
        </View>

        {/* Input Fields */}
        <Text className='text-xl font-bold mb-2  mt-4'>Enter the details</Text>

        <TextInput
          placeholder='Enter the details here'
          className='bg-gray-100 p-2 mb-2 rounded-full border border-gray-100'
        />
        <View className='flex-row justify-between mb-2'>
          <TextInput
            placeholder='Age'
            className='bg-gray-100 p-2 flex-1 mr-2 rounded-full border border-gray-100'
          />
          <TextInput
            placeholder='City'
            className='bg-gray-100 p-2 flex-1 ml-2 rounded-full border border-gray-100'
          />
        </View>
        <TextInput
          placeholder='State'
          className='bg-gray-100 p-2 mb-2 rounded-full border border-gray-100'
        />
        <TextInput
          placeholder='Zip Code'
          className='bg-gray-100 p-2 mb-2 rounded-full border border-gray-100'
        />
        <CustomTouchableOpacity className='bg-cyan-300 p-4 rounded-full flex-row justify-center  mb-4 w-32 '>
          <Text className='text-white font-bold'>Search</Text>
        </CustomTouchableOpacity>

        {/* Default Results Message */}
        <View className='p-4 rounded-lg flex flex-row justify-center items-center mt-8'>
          <Text className='text-sm text-gray-500 font-bold mb-0 mr-1'>
            10 results found
          </Text>
          <CustomTouchableOpacity className='bg-cyan-300 p-4  rounded-full flex-row justify-center items-center w-44'>
            <Text className='text-white'>Click here to show</Text>
          </CustomTouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default AdvSearch
