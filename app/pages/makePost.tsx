import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

import * as ImagePicker from "expo-image-picker";

export default function MakePost() {
  const [image, setImage] = useState<string | null>(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    dateRange: "",
    price: "",
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", formData);
  };

  return (
    <ScrollView className="flex-1 p-4 bg-gray-100 mb-3">
      <View className="p-4 bg-white rounded-lg shadow">
        <Text className="text-xl font-bold text-gray-800 mb-4">
          Post's details
        </Text>

        {/* image pick */}
        <View className=" bg-white rounded-2xl p-4 pt-0" >
        <TouchableOpacity onPress={pickImage}>
          {/* <Button title="Pick an image from camera roll" onPress={pickImage} /> */}
         
          {image ? (
            <Image source={{ uri:image }} style={styles.image} className="rounded-2xl"/>
          ) : (
            <Image
              source={require("@/assets/images/imagereplace.png")}
              className= "rounded-2xl bg-slate-200 " style={styles.image}
            />
          )}
        </TouchableOpacity>
        </View>

        {/* Title */}
        <View className="mb-4">
          <Text className="text-gray-700 font-semibold">Title</Text>
          <TextInput
            className="mt-2 p-3 border border-gray-300 rounded-lg"
            placeholder="Enter title (e.g., Bootleg Portal Chemist Rick)"
            value={formData.title}
            onChangeText={(text) => handleInputChange("title", text)}
          />
        </View>

        {/* Distance */}
        <View className="mb-4">
          <Text className="text-gray-700 font-semibold">Location</Text>
          <TextInput
            className="mt-2 p-3 border border-gray-300 rounded-lg"
            placeholder="Enter distance (e.g., 2.7 km)"
            value={formData.location}
            onChangeText={(text) => handleInputChange("location", text)}
          />
        </View>

        {/* Date Range */}
        <View className="mb-4">
          <Text className="text-gray-700 font-semibold">Available date</Text>
          <TextInput
            className="mt-2 p-3 border border-gray-300 rounded-lg"
            placeholder="Enter date range (e.g., April 3 - 9)"
            value={formData.dateRange}
            onChangeText={(text) => handleInputChange("dateRange", text)}
          />
        </View>

        {/* Price */}
        <View className="mb-4">
          <Text className="text-gray-700 font-semibold">Price</Text>
          <TextInput
            className="mt-2 p-3 border border-gray-300 rounded-lg"
            placeholder="Enter price (e.g., Rs.1100)"
            keyboardType="numeric"
            value={formData.price}
            onChangeText={(text) => handleInputChange("price", text)}
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          className="bg-blue-600 p-3 rounded-lg"
          onPress={handleSubmit}
        >
          <Text className="text-center text-white font-bold">Post</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 200,
  },
  image: {
   aspectRatio:1/1,
   width: 300,
   height: 300,
   
  },
});
