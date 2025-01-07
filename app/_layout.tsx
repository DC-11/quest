import { Stack } from "expo-router";
import {Tabs} from 'expo-router';
import "../global.css";

export default function RootLayout() {
  return (
    <Stack
    screenOptions={{
      headerShown: false, // Enable headers if needed
      headerTitle: "",   // Leave the title blank to avoid default folder names
    }}
    >
      
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
   {/*  */}
      {/* main root routing from here all the request is handled from code to ui */}
    </Stack>
  );
}34