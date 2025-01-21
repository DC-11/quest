import React from 'react';
import { StyleSheet,View, Text, Image, TouchableOpacity,Pressable , SafeAreaView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Character } from '@/assets/types';
import { ThemeContext } from '@/components/theme/ThemContext';
import  { useContext, } from 'react';

type DayListItem={
  day:number;
}
type CharacterListItem = {
  character: Character;
};
const RoomCard = ({ character }: CharacterListItem) => {
  const { colors } = useContext(ThemeContext);
  return (
    <SafeAreaView >
      <View style={{backgroundColor: colors.background }}>
    <Link href={`/pages/roomprofile`} asChild>
    <Pressable style={styles.box} className='pt-2 pb-0 pl-4 pr-4 border-2 border-slate-200 rounded-2xl'  >
    <Image source={{ uri: character.image }} style={styles.image} className=' rounded-3xl'/>
    <View style={styles.details}>
      <View style={styles.footer}>
    <Text style={styles.name}>{character.name}</Text>
    <Text style={styles.rating} className='text-black text-base'>★ ehh</Text>
    </View>

    <Text style={styles.distance}>2.7 kilometer close</Text>
    <Text style={styles.date}>April 3 - 9 </Text>
    <Text className='text-lg'>Rs.1100</Text>
    
    </View>

    {/* <Link href={'/day/day1'}>to user</Link> */}
  </Pressable>
  </Link>
  </View>
  </SafeAreaView>
  );
};

export default RoomCard;

const styles=StyleSheet.create({
  box: {
  
    backgroundColor: '#fff',
    margin:2,
    overflow: 'hidden',
    shadowColor: '#f0f0f0',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    elevation: 5,
  
  
    },
    details: {
      padding: 15,
    },
    text: {
      color: '#9b4521',
      fontSize: 70,
  
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      
    },
    distance:{
      fontSize: 14,
    color: '#555',
    },
    date:{
      fontSize: 14,
      color: '#777',
      marginBottom: 10,
    },

    
      

    

    image: {
      width: '100%',       // Full width
      //height: 450,         // Fixed height
     aspectRatio:1/1, // Maintain aspect ratio (16:9)
      resizeMode: 'cover',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 'auto',
    },

})
