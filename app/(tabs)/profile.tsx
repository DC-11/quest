import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons"; // For icons
import { Link } from "expo-router";
import { ScrollView } from "react-native";
import { blue100 } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import { red } from "react-native-reanimated/lib/typescript/Colors";

export default function ProfileScreen() {
  return (
    
      <ScrollView >
        <View className="flex-row justify-between ">
          <Link href={"/pages/login"}>
            <Text>click me to login</Text>
          </Link>
          <Link href={"/pages/setting"}>
            <Ionicons
              name="settings-outline"
              size={32}
              color="black"
              aria-label="settings"
            ></Ionicons>
          </Link>
        </View>
        {/* Top Section */}
        <View className="rounded-lg p-5 mb-5 bg-stone-300">
          {/* Profile Picture and Info */}
          <View className="flex-row items-center">
            <View className="w-20 h-20 bg-red-600 rounded-full mr-5"></View>
            <View>
              <Text className="text-black font-bold text-xl">
                Venu gopal iyer
              </Text>
              <Text className="text-gray-800">Owner</Text>
            </View>
          </View>

          {/* Reviews and Rating */}
          <View className="flex-row justify-evenly mt-5 ">
            <View>
              <Text className="text-black text-lg font-bold">600</Text>
              <Text className="text-gray-800 text-lg">reviews</Text>
            </View>
            <View>
              <Text className="text-black text-lg font-bold">4.5</Text>
              <Text className="text-gray-800 text-lg">rating</Text>
            </View>
          </View>
        </View>

        {/* Bio Section */}
        <ScrollView
          style={{ maxHeight: 200 }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View className=" ml-10">
            <Text className="text-black-400 mb-1">
              Speaks Nepali and English
            </Text>
            {/* qualities */}
            <Text className="text-black-400 mb-3">
              Lives in Pokhara, Nepal
            </Text>
            {/* Location */}
            <Text className="text-black-400">
              {" "}
              {/* description here */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sed justo at orci hendrerit posuere. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vivamus sed justo at orci hendrerit
              posuere.
            </Text>
          </View>
        </ScrollView>

        {/* Post and Review Grids */}

        <View className="mt-8">
          {/* Review Section */}
          <Text className="text-black font-bold text-lg mb-3">Review</Text>
          <ScrollView horizontal={true} className="flex-row  mb-5">
            <View className="flex-row justify-between gap-5">
              <View className="bg-gray-800 w-36 h-28 rounded-lg"></View>
              <View className="bg-gray-800 w-36 h-28 rounded-lg"></View>
              <View className="bg-gray-800 w-36 h-28 rounded-lg"></View>
              <View className="bg-gray-800 w-36 h-28 rounded-lg"></View>
              <View className="bg-gray-800 w-36 h-28 rounded-lg"></View>
              <View className="bg-gray-800 w-36 h-28 rounded-lg"></View>
            </View>
          </ScrollView>
          {/* Post Section */}
          <Text className="text-black font-bold text-lg mb-3">Post</Text>
          <ScrollView className="flex-row  mb-5" horizontal={true}>
            <View className="flex-row justify-between gap-5">
              <View className="bg-gray-800 w-96 h-80 rounded-lg"></View>
              <View className="bg-gray-800 w-96 h-80 rounded-lg"></View>
              <View className="bg-gray-800 w-96 h-80 rounded-lg"></View>
              <View className="bg-gray-800 w-96 h-80 rounded-lg"></View>
              <View className="bg-gray-800 w-96 h-80 rounded-lg"></View>
              <View className="bg-gray-800 w-96 h-80 rounded-lg"></View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    
  );
}
