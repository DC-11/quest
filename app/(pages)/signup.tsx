import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import Button1 from "@/components/Button1";
import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";
import TextField from "@/components/TextField";
import { Ionicons } from "@expo/vector-icons";
import { Checkbox } from "react-native-paper";

const signup = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };
  const router =
    useRouter(); /* this is a react lib which will help with some built in functions */
  const [passwordVisible, setPasswordVisible] = useState(false);
  const onRegister = () => {
    router.navigate("/login");
  };
  return (
    <View className="flex-1 justify-center items-center p-5">
      <View className="w-full max-w-md gap-5">
        <Text className="font-bold text-2xl text-center">Sign up</Text>
        <Text className="font-bold text-xl text-center text-slate-500">
          Join us
        </Text>

        <TextInput  placeholder="Name" className=" border h-14 px-5 rounded-lg bg-white" />
        <TextInput  placeholder="Email" className=" border h-14 px-5 rounded-lg bg-white" />
        


        <View className="relative">
          <TextInput
            placeholder="Password"
            secureTextEntry={!passwordVisible} // Toggles text visibility
            className=" border h-14 px-5 rounded-lgn bg-white rounded-lg"
          />

          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)} // Toggle visibility state
            className="absolute right-4 top-4"
          >
            <Ionicons
              name={passwordVisible ? "eye-off-outline" : "eye-outline"} // Dynamic icon
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center gap-2">
          <View className="border transform scale-75">
            <Checkbox
              status={isChecked ? "checked" : "unchecked"}
              onPress={handleCheckBoxChange}
            />
          </View>
          <View className="flex-row items-center gap-1">
            <Text className="text-sm">I agree to the </Text>
            <TouchableOpacity
              onPress={() => console.log("terms and condition")}
              activeOpacity={0.5}
            >
              <Text className="text-blue-700 text-sm">Terms & Conditions</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Button1
          title={"Register"}
          onPress={onRegister}
          classname={"bg-black  py-3 rounded-full items-center"}
          textclassname="text-white font-bold text-lg"
        ></Button1>
      </View>
      <View className="flex-row items-center justify-center space-x-2 mt-10">
        <Text>Already have an account?</Text>
        <TouchableOpacity activeOpacity={0.5} onPress={onRegister}>
          <Text className="text-blue-700 font-bold">Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default signup;
