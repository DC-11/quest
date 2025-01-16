import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '@/components/buttomnav/TabBar'
import { StatusBar } from 'react-native'
import { Redirect } from 'expo-router';


import { Stack } from "expo-router";
import "@/global.css";
import { ThemeProvider } from '@/components/theme/ThemContext'; // Fix typo in "ThemeContext"
import { useContext } from "react";
import { ThemeContext } from '@/components/theme/ThemContext'; // Fix typo in "ThemeContext"



// Wrap the RootLayout with ThemeProvider
export default function RootLayout() {
    const isAuthenticated=false;


   // const { user } = useAuth();
    const { colors } = useContext(ThemeContext); 
    if (!isAuthenticated) {
        return <Redirect href="/(auth)/login" />;
      }
      
  
    
        return (
            <>
                <StatusBar

                    barStyle={colors.background === '#121212' ? 'light-content' : 'dark-content'}
                    backgroundColor={colors.background}
                />

                <Tabs
                    tabBar={props => <TabBar {...props} />}
                    screenOptions={{
                        headerStyle: { backgroundColor: colors.background },
                        headerTintColor: colors.text, // Color of header text and icons
                    }}

                >
                    <Tabs.Screen
                        name="index"
                        options={{
                            title: "Home", headerShown: false
                        }}
                    />
                    <Tabs.Screen
                        name="maps"
                        options={{
                            title: "maps"
                        }}
                    />
                    <Tabs.Screen
                        name="bookmark"
                        options={{
                            title: "bookmark"
                        }}
                    />
                    <Tabs.Screen
                        name="(profile)"
                        options={{
                            title: "Profile"
                        }}
                    />
                </Tabs>
            </>
                    )
    }
        

    









