import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
    
      <Stack.Screen
        name="login"
        options={{ title: "login", headerShown: false }}
      />
       <Stack.Screen
        name="roomprofile"
        options={{ title: "roomprofile", headerShown: false }}
      />
      <Stack.Screen
        name="setting"
        options={{ title: "setting", headerShown: false }}
      />
  
    </Stack>
  );
}
