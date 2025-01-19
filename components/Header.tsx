import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font'
import { Pacifico_400Regular,  } from '@expo-google-fonts/pacifico';
import { DancingScript_400Regular } from '@expo-google-fonts/dancing-script';
import AppLoading from 'expo-app-loading';

import { Link } from 'expo-router';
import { ThemeContext } from '@/components/theme/ThemContext';
import  { useContext, } from 'react';


const Header = () => {
  const { colors } = useContext(ThemeContext);
  const [fontsLoaded] = useFonts({
    Pacifico_400Regular,
    DancingScript_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Pressable onPress={() => { console.warn('hi there') }} style={styles.title}>
        {/* Header Title */}
        <Text style={styles.headerTitle} className='font-semibold'>NestQuest</Text>
      </Pressable>


      {/* Right-side Icons */}
      <View style={styles.iconContainer}>

        <TouchableOpacity style={styles.icon}>
          <Link href={`/pages/notificationLayout`}  >
            <FontAwesome name="heart-o" size={24} color="black" />
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Link href={`/pages/chatbox`}  >
            <FontAwesome5 name="facebook-messenger" size={24} color="black" />
          </Link>
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
    paddingVertical: 0,
    paddingHorizontal: 15,
    marginBottom:0, 
    
  },
  title: {
    height: 43,
  },
  headerTitle: {
    padding:1,
    paddingBottom:0,
    marginBottom:0,
    fontSize: 35,
  
    fontFamily:'Georgia',
    color: '#2a2530',
    flex: 1,
    fontWeight:'black',
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
