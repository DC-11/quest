import { router, Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Text } from 'react-native'

export default function Layout() {
  return (
    <Stack>

      <Stack.Screen
        name="login"
        options={{
          headerTitle: "NestQuest", // Set the title
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()} className="p-1">
              <Text className="text-blue-600 text-2xl">←</Text>
            </TouchableOpacity>
          ),
          headerTitleAlign: "center", // Align the title to the center

          headerTitleStyle: {
            fontSize: 18,
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="roomprofile"
        options={{
          headerTitle: "Room Profile", // Set the title
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()} className="p-1">
              <Text className="text-blue-600 text-2xl">←</Text>
            </TouchableOpacity>
          ),
          headerTitleAlign: "center", // Align the title to the center

          headerTitleStyle: {
            fontSize: 18,
            fontWeight: "bold",
          },
        }}
      />

      <Stack.Screen
        name="setting"
        options={{
          headerTitle: "setting", // Set the title
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()} className="p-1">
              <Text className="text-blue-600 text-2xl">←</Text>
            </TouchableOpacity>
          ),
          headerTitleAlign: "center", // Align the title to the center

          headerTitleStyle: {
            fontSize: 18,
            fontWeight: "bold",
          },
        }}
      />

    </Stack>
  );
}
