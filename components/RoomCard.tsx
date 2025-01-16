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
    <Pressable style={styles.box}>
    <Image source={{ uri: character.image }} style={styles.image} />
    <View style={styles.details}>
      <View style={styles.footer}>
    <Text style={styles.name}>{character.name}</Text>
    <Text style={styles.rating}>★ ehh</Text>
    </View>

    <Text style={styles.distance}>{character.name}</Text>
    <Text style={styles.date}>{character.name}</Text>
    <Text style={styles.price}>{character.name}</Text>
    
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
      borderWidth: StyleSheet.hairlineWidth,
      // width:100,
      // height:100,
      borderRadius: 10,
    backgroundColor: '#fff',
    margin:2,
    overflow: 'hidden',
    shadowColor: '#000',
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
    price: {
      fontSize: 16,
      color: '#333',
    },

    rating:{
      fontSize: 14,
      color: '#777',
      

    },

    image: {
      width: '100%',       // Full width
      height: 450,         // Fixed height
     //aspectRatio: 16 / 9, // Maintain aspect ratio (16:9)
      resizeMode: 'cover',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 'auto',
    },

})
