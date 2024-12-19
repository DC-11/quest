import { Stack } from "expo-router";
import {Tabs} from 'expo-router';
import "../global.css";

export default function RootLayout() {
  return (
    <Stack>
      
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* main root routing from here all the request is handled from code to ui */}
    </Stack>
  );
}
