import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '@/components/buttomnav/TabBar'

const _layout = () => {
  return (
    <Tabs
        tabBar={props=> <TabBar {...props} />}
    >
        <Tabs.Screen
            name="index"
            options={{
                title: "Home" ,headerShown:false
            }}
        />
        <Tabs.Screen
            name="maps"
            options={{
                title: "maps"
            }}
        />
        <Tabs.Screen
            name="notification"
            options={{
                title: "notifcation"
            }}
        />
        <Tabs.Screen
            name="(profile)"
            options={{
                title: "Profile"
            }}
        />
    </Tabs>
  )
}

export default _layout