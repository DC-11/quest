import Button1 from "@/components/Button1";
import TextField from "@/components/TextField";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, Link } from "expo-router";
import { useState } from "react";
import { Text, View, TouchableOpacity, TextInput, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const PlaceholderImage = require("@/assets/images/google.png");
  const onCreate = () => {
    router.navigate("/signup");
  };
  const onGoogle = () => {
    router.reload;
  };

  const onLogin = () => {
    router.navigate("/signup");
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center p-5">
      <View className="w-full max-w-md gap-5">
        <Text className="font-bold text-2xl text-center">Login</Text>
        <Text className="font-bold text-xl text-center text-slate-500">
          Welcome back
        </Text>

        <TextInput  placeholder="Name" className=" border h-14 px-5 rounded-lg bg-white" />
        <View className="relative">
          <TextInput
            placeholder="Password"
            secureTextEntry={!passwordVisible} // Toggles text visibility
            className=" border h-14 px-5 rounded-lg bg-white"
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

        <Button1
          title="Login"
          classname="bg-black py-3 rounded-full items-center"
          onPress={onLogin}
          textclassname="text-white font-bold text-lg"
        />

        {/* Divider */}
        <View className="flex-row items-center my-5">
          <View className="flex-1 h-[1px] bg-gray-300" />
          <Text className="mx-2 text-gray-500 text-sm">or sign in with</Text>
          <View className="flex-1 h-[1px] bg-gray-300" />
        </View>

        {/* Google Sign-In Button */}
        <TouchableOpacity
          className="bg-white border py-3 rounded-full items-center flex-row justify-center space-x-2"
          activeOpacity={0.7}
          onPress={onGoogle}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Image
            source={PlaceholderImage}
            className="w-6 h-6"
            style={{ alignSelf: "center", marginTop: 2 }} // Adjust marginTop here
          />
          <Text className="text-blackx text-lg">
            {"  "}
            Sign In With <Text className="font-bold">Google</Text>
          </Text>
        </TouchableOpacity>

        {/* Create Account */}
        <TouchableOpacity activeOpacity={0.5} onPress={onCreate}>
          <Link href={"/(pages)/signup"}>
          <Text className="text-blue-700 font-bold text-center text-xl">
            Create an account
          </Text>
          </Link>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
