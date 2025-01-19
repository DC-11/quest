import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import * as ImagePicker from "expo-image-picker";


export default function ProfileScreen() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">

<Stack.Screen

  
  options={{
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          // Perform your function here
          console.log("Navigating to Settings");
        }}
        style={{ marginRight: 10 }}
      >
        
        
    <Link href="/pages/setting">
    <Ionicons name="settings-outline" size={25} color="black" />
    </Link>
  
      </TouchableOpacity>
    ),
  }}
/>
      {/* Header Section */}
      
      
  {/* Profile and Change Button */}
  <View className="bg-gray-200 rounded-2xl p-6 mb-6 shadow-white flex-row items-center justify-between">
    <View className="items-center mr-4">
      {/* Profile Picture */}
      <View className="w-32 h-32 bg-green-200 rounded-full justify-center items-center overflow-hidden">
        {image ? (
          <Image
            source={{ uri: image }}
            className="w-full h-full"
            resizeMode="cover"
          />
        ) : (
          <Text className="text-gray-400 font-semibold">No Image</Text>
        )}
      </View>

      {/* Change Profile Button */}
      <View className="mt-0">
        <TouchableOpacity
          className="px-1 py-2 rounded-full shadow "
          onPress={pickImage}
        >
          <Text className=" ">Change Profile</Text>
        </TouchableOpacity>
      </View>
    </View>

    {/* User Info */}
    <View>
      <Text className="text-lg font-bold text-gray-800 mb-1">
        Venu Gopal Iyer
      </Text>
      <Text className="text-gray-600">Owner</Text>
    </View>
    
  </View>


    {/* Settings Icon */}
    
  
  
   




      

   

      {/* Stats Section */}
      <View className="flex-row justify-evenly mb-6">
        <View className="items-center">
          <Text className="text-2xl font-bold text-gray-800">600</Text>
          <Text className="text-gray-600">Reviews</Text>
        </View>
        <View className="items-center">
          <Text className="text-2xl font-bold text-gray-800">4.5</Text>
          <Text className="text-gray-600">Rating</Text>
        </View>
      </View>

      {/* Bio Section */}
      <View className="mb-6">
        <Text className="text-gray-800 text-center">Speaks Nepali and English</Text>
        <Text className="text-gray-800 text-center">Lives in Pokhara, Nepal</Text>
        <Text className="text-gray-600 mt-4 justify-center text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed
          justo at orci hendrerit posuere.
        </Text>
      </View>

      {/* Review Section */}
      <Text className="text-lg font-bold text-gray-800 mb-4">Review</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row space-x-4 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <View key={i} className="w-24 h-20 bg-gray-400 rounded-lg m-0.5 p-3"></View>
          ))}
        </View>
      </ScrollView>

      {/* Post Section */}
      <Text className="text-lg font-bold text-gray-800 mb-4">Post</Text>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row space-x-4 mb-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <View key={i} className="w-48 h-40 bg-gray-400 m-0.5 rounded-lg"></View>
          ))}
        </View>
      </ScrollView>

  
    </ScrollView>
  );
}
