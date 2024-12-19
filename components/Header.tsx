import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import AppLoading from 'expo-app-loading'; 
import {useFonts} from 'expo-font'


const Header = () => {
  const [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
        <Pressable onPress={()=>{console.warn('hi there')}} style={styles.title}>
      {/* Header Title */}
      <Text style={styles.headerTitle}>NestQuest</Text>
      </Pressable>

      
      {/* Right-side Icons */}
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome name="heart-o" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome5 name="facebook-messenger" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  title:{
    height:43,
  },
  headerTitle: {
    fontSize: 25,
    fontFamily: 'Pacifico', // Use a cursive font here
    color: 'black',
    flex: 1,
    textAlign: 'left', // Center align the title
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 20,
  },
});
